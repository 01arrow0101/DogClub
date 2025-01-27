<script setup>
import { RouterView } from 'vue-router'
import { useCartStore } from './stores/cartStore'
import { useModuleStore } from './stores/modulesStore'
import { onMounted, ref } from 'vue'
import { useDataBaseStore } from './stores/dataBaseStore'
import Modal from './components/Modal/Modal.vue'
import AppLoader from './components/AppLoader.vue'
import AppCart from './components/Cart/AppCart.vue'
import AppHeader from './components/Header/AppHeader.vue'
import AppFooter from './components/Footer/AppFooter.vue'
import AppButton from './components/Button/AppButton.vue'

const dataBaseStore = useDataBaseStore()
const moduleStore = useModuleStore()
const cartStore = useCartStore()

onMounted(() => {
  dataBaseStore.getDataBase()
  window.addEventListener('scroll',showScroll)
})
const btnShow =ref(false)

const showScroll = () =>{

    btnShow.value = window.scrollY > 200

}
const upTo = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <AppButton class="buttonUp" v-if="btnShow" @click="upTo">UP</AppButton>

  <Modal v-if="moduleStore.isOpenModalWindow" />

 <div class="loading_overlay" v-if="dataBaseStore.loader">
    <AppLoader loading="loading" loader=" loader" />
 </div>

  <header class="header">
    <transition name="swipe">
      <div v-if="cartStore.showCart" class="cart-wrapper animate-cart">
        <AppCart />
      </div>
    </transition>
    <AppHeader />
  </header>
  <RouterView />
  <footer class="footer">
    <AppFooter />
  </footer>
</template>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
.buttonUp
  position: fixed
  bottom: 100px
  right: 100px
  z-index: 9999
  padding: 4px
  border-radius: 25%
  @media (max-width: 768px)
  bottom: 50px
  right: 20px
.header
  position: sticky
  top: 0
  left: 0
  z-index: 100
  background: rgba(240, 250, 250, 0.5)
  backdrop-filter: blur(10px)
.cart-wrapper
  position: fixed
  right: 0
  top: 20px
  background: rgba(255, 255, 255, 80% )
  width: 50px
  border-radius: 32px 0 0 32px
  border: 3px solid $hover
  border-right: 1px solid transparent


  z-index: 2000
  overflow: hidden

.animate-cart
  animation: swipe 1.5s ease forwards
  background: rgba(240, 250, 250, 0.8)
// Анимация для появления
@keyframes swipe
  0%
    width: 0
    height: 0
    padding: 25px
    opacity: 0
    overflow: hidden

  75%
    width: 30%
    height: 0
    padding: 25px
    opacity: 1

  99%
    overflow: hidden

  100%
    width: 30%
    height: 100vh
    overflow: auto



// Анимация для исчезновения
.swipe-leave-active
  animation: swipe-reverse 1.5s ease forwards
@keyframes swipe-reverse
  0%
    width: 30%
    height: 100vh
    overflow: hidden
  75%
    width: 30%
    padding: 25px
    opacity: 1
  100%
    padding: 25px
    opacity: 0
    overflow: hidden

@media (max-width: 768px)
  .animate-cart
    animation: swipe 1.5s ease forwards
  @keyframes swipe
    0%
      width: 0
      height: 0
      padding: 25px
      opacity: 0
      overflow: hidden
    75%
      width: 100%
      height: 0
      padding: 25px
      opacity: 1
      overflow: hidden
    100%
      width: 100%
      height: 100vh
      overflow-y: auto


  .swipe-leave-active
    animation: swipe-reverse 1.5s ease forwards
  @keyframes swipe-reverse
    0%
      width: 100%
      height: 100vh
      overflow-y: auto
    75%
      width: 100%
      padding: 25px
      opacity: 1
      overflow: hidden
    100%
      padding: 25px
      opacity: 0
      height: 0

// ------------------------------------------------------------
.loading_overlay
  position: absolute
  background: rgba(0, 0, 0, 50%)
  width: 100%
  height: 100%
  z-index: 999
  top: 0
  left: 0
  display: flex
  justify-content: center
</style>
