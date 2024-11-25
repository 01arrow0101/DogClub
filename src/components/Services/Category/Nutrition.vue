<template>
  <div class="container">
    <div class="row mb">
      <div class="title-h2">Nutrition</div>
      <div class="sort">
            <div class="row">
              <div class="title-h3">Sorting:</div>
              <div class="category">
                <button>Popularity</button>
                <button>Cheaper first</button>
                <button>More expensive first</button>
                <button>By name</button>
                <button>New ones first</button>
              </div>
            </div>
      </div>
    </div>
      <Card />
  </div>
</template>

<script setup>
import Card from './Card.vue'
</script>

<style lang="sass" scoped>
$primary: #FF9F0E
.container
  padding-top: 72px
  padding-bottom: 88px
.row
  justify-content: space-between
  align-items: center
.mb
  margin-bottom: 72px  
.title-h2,
.title-h3
  color: $primary
  margin: 0
.title-h3
  margin-right: 16px  
</style>
