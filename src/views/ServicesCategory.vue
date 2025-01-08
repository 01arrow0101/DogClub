<script setup>
import { onMounted } from 'vue';
import { useNutritionStore } from '@/stores/nutritionStore';
import { useModuleStore } from '@/stores/modulesStore';
import Services from '@/components/Services/Services.vue';
import Nutrition from '../components/Services/Category/Nutrition.vue'
import Grooming from '@/components/Services/Category/Grooming.vue';
import Training from '@/components/Services/Category/Training.vue';
import Bathing from '@/components/Services/Category/Bathing.vue';

const nutritionStore = useNutritionStore()
const moduleStore = useModuleStore()


onMounted(() => {
  nutritionStore.getNutrition()
})
</script>

<template>
  <main>
    <Services />
    <Nutrition id="Nutrition" v-if="moduleStore.activeTabCategory === 'Nutrition'" />
    <Grooming v-if="moduleStore.activeTabCategory === 'Grooming'" />
    <Training v-if="moduleStore.activeTabCategory === 'Training'"/>
    <Bathing v-if="moduleStore.activeTabCategory === 'Bathing'"/>
  </main>
</template>
