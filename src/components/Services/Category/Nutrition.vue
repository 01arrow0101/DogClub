<template>
  <div class="container">
    <div class="row mb">
      <div class="title-h2">Nutrition</div>
      <div class="sort">
        <div class="row">
          <div class="title-h3">Sorting:</div>
          <div class="category">
            <button @click="nutritionStore.sortBy('stars')">Popularity</button>
            <button @click="nutritionStore.sortBy('discount')">Cheaper first</button>
            <button @click="nutritionStore.sortBy('price')">More expensive first</button>
            <button  @click="nutritionStore.sortByName('title')">By name</button>
            <button  @click="nutritionStore.sortBy('new')">New ones first</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loader" class="loading">
      <div class="loader"></div>
    </div>
    <div class="grid">
      <Card v-for="item in nutritionStore.cards" :key="item.id" :item="item"/>
      <Card v-for="item in nutritionStore.sortCategory" :key="item.id" :item="item"/>
          </div>
    <div>
      <p>No items found.</p>
    </div>
    <div class="pagination">
      <button>Previous</button>
      <button>1</button>
      <button>Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './Card.vue'
import { useNutritionStore } from '/src/stores/nutritionStore'

const loader = ref(false)
const nutritionStore = useNutritionStore()
</script>

<style lang="sass" scoped>
$primary: #FF9F0E

.container
  padding-top: 72px
  padding-bottom: 88px

.row
  justify-content: space-between
  align-items: center
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

.title-h2,
.title-h3
  color: $primary
  margin: 0
.title-h2
  @media (max-width:768px)
    margin-bottom: 16px
    font-size: 2rem
    line-height: 40px
    text-align: start
.title-h3
  margin-right: 16px

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

.category button
  padding: 8px 16px
  margin-right: 8px
  border: 1px solid #ccc
  border-radius: 4px
  background-color: #fff
  cursor: pointer

.category button.active
  background-color: $primary
  color: #fff
  border-color: $primary

.pagination
  display: flex
  justify-content: center
  margin-top: 24px

.pagination button
  padding: 8px 16px
  margin-right: 8px
  border: 1px solid #ccc
  border-radius: 4px
  background-color: #fff
  cursor: pointer

.pagination button.active
  background-color: $primary
  color: #fff
  border-color: $primary

.pagination button:disabled
  background-color: #f3f3f3
  color: #ccc
  cursor: not-allowed
</style>
