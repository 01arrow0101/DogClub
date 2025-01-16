<script setup>
import Services from '@/components/Services/Services.vue'
import Nutrition from '../components/Services/Category/Nutrition.vue'
import Grooming from '@/components/Services/Category/Grooming.vue'
import Training from '@/components/Services/Category/Training.vue'
import Bathing from '@/components/Services/Category/Bathing.vue'

import { useDataBaseStore } from '../stores/dataBaseStore'
import Card from '../components/Services/Category/Card.vue'
import { onMounted, ref } from 'vue'

const base  = ref([])
const nutritionStore = useDataBaseStore()
onMounted(()=>{
  nutritionStore.cards = []
  nutritionStore.getDataBase('bathing')
  nutritionStore.getDataBase('grooming')
  nutritionStore.getDataBase('nutritions')
  nutritionStore.getDataBase('training')
  base.value = nutritionStore.cards
})


</script>

<template>
  <main>
    <Services :is-show="false" />


    <section>
      <div class="container">
    <h2 class="title-h2 center">Усі Товари</h2>
    <div v-if="nutritionStore.loader" class="loading">
      <div class="loader"></div>
    </div>
    <div class="grid">
      <Card v-for="item in base" :key="item.id" :item="item"/>
          </div>
</div>
</section>

  </main>
</template>

<style lang="sass" scoped>
$primary: #FF9F0E
.container
  padding-top: 72px
  padding-bottom: 88px
.container .row.mb
  @media (max-width: 768px)
    flex-direction: column
    justify-content: flex-start
.grid
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(auto, 1fr)
  justify-items: center
  gap: 32px
  @media (max-width: 768px)
    grid-template-columns: repeat(2, 1fr)
  @media (max-width: 480px)
    grid-template-columns: repeat(1, 1fr)


.mb
  margin-bottom: 72px

.title-h2
  color: $primary
  margin: 0
  margin-bottom: 50px
.title-h2
  @media (max-width:768px)
    margin-bottom: 16px
    font-size: 2rem
    line-height: 40px
    text-align: start
.loading
  display: flex
  justify-content: center
  align-items: center
  height: 200px

.loader
  border: 16px solid #f3f3f3
  border-top: 16px solid #FF9F0E
  border-radius: 50%
  width: 120px
  height: 120px
  animation: spin 2s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
