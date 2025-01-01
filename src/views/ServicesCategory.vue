<script setup>
import { onMounted } from 'vue';
import { useNutritionStore } from '@/stores/nutritionStore';
import Modal from '../components/Modal/Modal.vue'
import Nutrition from '../components/Services/Category/Nutrition.vue'
import { ref } from 'vue'

const nutritionStore = useNutritionStore()
const isOpenModal = ref(false)


onMounted(() => {
  nutritionStore.getNutrition()
})
</script>

<template>
  <Modal v-if="isOpenModal"/>
  <main>
    <Nutrition />
  </main>
</template>
