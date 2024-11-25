<script setup>
import Modal from '../components/Modal/Modal.vue'
import AppHeader from '../components/Header/AppHeader.vue'
import AppFooter from '../components/Footer/AppFooter.vue'

import { ref } from 'vue'

const isOpenModal = ref(false)
</script>

<template>
  <Modal v-if="isOpenModal"/>
  <AppHeader />
  <main>
  </main>
  <AppFooter/>
</template>
