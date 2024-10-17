<script setup>
import Modal from '../components/Modal/Modal.vue'
import TakingCare from '@/components/TakingCare/TakingCare.vue'
import AppHeader from '../components/Header/AppHeader.vue'
import LessTalk from '../components/LessTalk/LessTalk.vue'
import Services from '../components/Services/Services.vue'

import { ref } from 'vue'

const isOpenModal = ref(false)
</script>

<template>
  <Modal v-if="isOpenModal"/>
  <AppHeader />
  <main>
    <TakingCare />
    <LessTalk />
    <Services />
  </main>
</template>
