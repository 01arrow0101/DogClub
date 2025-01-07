<script setup>
import { RouterView } from 'vue-router'
import AppCart from './components/Cart/AppCart.vue'
import AppHeader from './components/Header/AppHeader.vue'
import AppFooter from './components/Footer/AppFooter.vue'
import Modal from './components/Modal/Modal.vue'
import { useCartStore } from './stores/cartStore'
import { useModuleStore } from './stores/modulesStore'

const moduleStore = useModuleStore()
const cartStore = useCartStore()
</script>

<template>
  <Modal v-if="moduleStore.isOpenModalWindow" />
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
  background: lighten($hover, 15% )
  width: 50px
  border-radius: 32px 0 0 32px
  z-index: 2000
  overflow: hidden

.animate-cart
  animation: swipe 1.5s ease forwards

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
</style>
