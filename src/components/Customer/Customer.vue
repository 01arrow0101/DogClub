<template>
  <div class="container">
    <h2 class="title-h2">Happy customer</h2>
    <div class="slider">
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
    quality: 4,
  },
])
</script>

<style lang="sass" scoped></style>
