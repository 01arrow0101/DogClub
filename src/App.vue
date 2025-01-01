<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/Header/AppHeader.vue'
import AppFooter from './components/Footer/AppFooter.vue'
</script>

<template>
  <header class="header">
    <AppHeader />
  </header>
  <RouterView />
  <footer class="footer">
    <AppFooter />
  </footer>
</template>

<style lang="sass" scoped></style>
