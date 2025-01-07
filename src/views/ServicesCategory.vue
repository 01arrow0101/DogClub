<script setup>
import { onMounted } from 'vue';
import { useNutritionStore } from '@/stores/nutritionStore';
import Nutrition from '../components/Services/Category/Nutrition.vue'

const nutritionStore = useNutritionStore()


onMounted(() => {
  nutritionStore.getNutrition()
})
</script>

<template>
  <main>
    <Nutrition />
  </main>
</template>
