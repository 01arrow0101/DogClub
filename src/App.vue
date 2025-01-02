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
    <div  v-if="cartStore.showCart"  class="cart">
      <AppCart/>
    </div>
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
.cart
  position: absolute
  right: 0
  top: 20px
  background: lighten($hover, 15% )
  min-height: 100%
  width: 25%
  border-radius: 32px 0 0 32px
  padding: 32px 16px
  z-index: 2000

</style>
