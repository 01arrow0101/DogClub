<script setup>
import { onMounted } from 'vue';
import { useNutritionStore } from '@/stores/nutritionStore';
import { useModuleStore } from '@/stores/modulesStore';
import Nutrition from '../components/Services/Category/Nutrition.vue'

const nutritionStore = useNutritionStore()
const moduleStore = useModuleStore()


onMounted(() => {
  nutritionStore.getNutrition()
})
</script>

<template>
  <main>
    <Nutrition v-if="moduleStore.activeTabCategory === 'nutrition'" />
  </main>
</template>
