<template>
<div class="container padding">
  <div class="row">
    <div class="left">
      <div class="title">Taking care for your Smart Dog!</div>
      <p class="text">Human–canine bonding is the relationship between dogs and humans</p>
      <AppButton>Explore More</AppButton>
    </div>
    <div class="right">
      <img class="bg" src="/src/assets/img/Main/bg1Home.png" alt="bg">
      <img class="dog" src="/src/assets/img/Main/dog.png" alt="dog">
    </div>
  </div>
</div>
</template>

<script setup>
import AppButton from '../Button/AppButton.vue'
</script>

<style lang="sass" scoped>
.padding
  padding-top: 212px
  padding-bottom: 235px
.row
  position: relative
.left
  width: 50% 
.right
  width: 50%
  position: relative
  & .dog
    position: absolute
    top: 0
    right: 0
  & .bg
    position: absolute
    top: calc(151px - 212px)
    left: -150px 
</style>