<script setup>
import Modal from '../components/Modal/Modal.vue'
import Nutrition from '../components/Services/Category/Nutrition.vue'

import { ref } from 'vue'

const isOpenModal = ref(false)

</script>

<template>
  <Modal v-if="isOpenModal"/>
  <main>
    <Nutrition />
  </main>
</template>
