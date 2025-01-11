<script setup>
import Services from '@/components/Services/Services.vue'
import Nutrition from '../components/Services/Category/Nutrition.vue'
import Grooming from '@/components/Services/Category/Grooming.vue'
import Training from '@/components/Services/Category/Training.vue'
import Bathing from '@/components/Services/Category/Bathing.vue'
</script>

<template>
  <main>
    <Services :is-show="false" />
    <Nutrition :tab-is-show="false" />
    <Grooming />
    <Training />
    <Bathing />
  </main>
</template>
