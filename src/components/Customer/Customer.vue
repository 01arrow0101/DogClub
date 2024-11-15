<template>
  <div class="container">
    <h2 class="title-h2 center">Happy customer</h2>
    <div class="slider row">
      <CardCustomer v-for="card in cards" :key="card.name" :person="card" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import CardCustomer from '../Customer/CardCustomer.vue'

const cards = ref([
  {
    folder: '/src/assets/img/Main/Customer/Christin.jpeg',
    title: 'Christin & Tom',
    text: 'Love the overall workout experience!',
    quality: 5,
  },
  {
    folder: '/src/assets/img/Main/Customer/Anna.jpeg',
    title: 'Anna & Tobby',
    text: 'Amazing Products & Delivery on time.',
    quality: 4,
  },
  {
    folder: '/src/assets/img/Main/Customer/Sindy.jpeg',
    title: 'Sindy & Kitch',
    text: 'Great job with the trainer!',
    quality: 5,   
  },
])
</script>

<style lang="sass" scoped>
.row
  gap: 16px
</style>
