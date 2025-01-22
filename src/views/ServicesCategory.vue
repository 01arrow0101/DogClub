<script setup>
import { onMounted, ref } from 'vue'
import { useDataBaseStore } from '../stores/dataBaseStore'
import Services from '@/components/Services/Services.vue'
import Card from '../components/Services/Category/Card.vue'

const allProducts  = ref([])
const nutritionStore = useDataBaseStore()
onMounted(()=>{
  allProducts.value = []
  nutritionStore.loader = true
  setTimeout(() =>{
    allProducts.value = nutritionStore.cards
  nutritionStore.loader = false
  },1000)
})


</script>

<template>
  <main>
    <Services :is-show="false" />
    <section>
      <div class="container">
    <h2 class="title-h2 center">Усі Товари</h2>
    <div class="grid">
      <Card v-for="item in allProducts" :key="item.id" :item="item"/>
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
</style>
