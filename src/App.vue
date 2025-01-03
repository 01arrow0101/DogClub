<script setup>
import { RouterView } from 'vue-router'
import AppCart from './components/Cart/AppCart.vue';
import AppHeader from './components/Header/AppHeader.vue'
import AppFooter from './components/Footer/AppFooter.vue'
import { useCartStore } from './stores/cartStore';

const cartStore = useCartStore()

</script>

<template>
  <header class="header">
    <transition name="swipe">
      <div v-if="cartStore.showCart" class="cart-wrapper animate-cart">
        <AppCart/>
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
  position: relative
.cart-wrapper
  position: fixed
  right: 0
  top: 20px
  background: lighten($hover, 15% )
  width: 300px
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
    opacity: 0
    padding: 24px
    overflow: hidden
  75%
    width: 300px
    height: 0
    opacity: 1
    padding: 24px
  99%
    overflow: hidden
  100%
    width: 300px
    height: 100vh
    overflow: auto

// Анимация для исчезновения
.swipe-leave-active
  animation: swipe-reverse 1.5s ease forwards

@keyframes swipe-reverse
  0%
    width: 300px
    height: 100vh
    opacity: 1
    overflow: hidden
  25%
    height: 0
  100%
    width: 0
    height: 0
    opacity: 0
    overflow: hidden

</style>
