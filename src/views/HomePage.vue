<script setup>
import Modal from '../components/Modal/Modal.vue'
import TakingCare from '@/components/TakingCare/TakingCare.vue'
import LessTalk from '../components/LessTalk/LessTalk.vue'
import Services from '../components/Services/Services.vue'
import Customer from '../components/Customer/Customer.vue'
import AppForma from '../components/Forma/AppForma.vue'

import { ref } from 'vue'

const isOpenModal = ref(false)
</script>

<template>
  <Modal v-if="isOpenModal"/>
  <main>
    <TakingCare />
    <LessTalk />
    <Services />
    <Customer />
    <AppForma/>
  </main>
</template>
