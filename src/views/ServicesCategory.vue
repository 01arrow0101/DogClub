<script setup>
import Modal from '../components/Modal/Modal.vue'
import AppHeader from '../components/Header/AppHeader.vue'
import AppFooter from '../components/Footer/AppFooter.vue'
import Nutrition from '../components/Services/Category/Nutrition.vue'

import { ref } from 'vue'

const isOpenModal = ref(false)
</script>

<template>
  <Modal v-if="isOpenModal"/>
  <AppHeader />
  <main>
    <Nutrition />
  </main>
  <AppFooter/>
</template>
