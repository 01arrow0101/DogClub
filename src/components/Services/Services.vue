<template>
<div class="bg">
  <div class="container ">
<h2 class="title-h2 center">Services category </h2>
<div class="content">
<div class="cards row">
  <Card v-for="service in services" :key="service.name" :service="service"/>
  <a class="linkMore" href="#">more services
    <Svg folder="/src/assets/img/Main/Services" name="Arrow" class="arrow"></Svg>
  </a>
</div>
</div>
  </div>
</div>
</template>

<script setup>
import Card from '@/components/Services/Card.vue'
import Svg from '@/components/Svg/Svg.vue'

import { ref } from 'vue'

const services = ref([
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Grooming'
},
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Nutrition'
},
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Training'
},
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Bathing'
},
])
</script>

<style lang="sass" scoped>
@import '@/assets/main'
.bg
  width: 100%
  background: url('../src/assets/img/Main/Services/bg.png') center /cover no-repeat
.container
  position: relative
  padding: 68px 0 95px
  &::after
    content:''
    position: absolute
    width: 192px
    height: 144px
    top: 0
    right: -80px
    transform: rotate(5deg)
    background: url('../src/assets/img/Main/Services/bgArrow.svg') center / cover no-repeat
  
.cards
  justify-content: center
  align-items: center
  gap: 24px
  flex-wrap: wrap
  @media (max-width: 768px)
.linkMore
  align-self: end
  color: $hover

  display: flex
  align-items: center
  gap: 8px

  font-style: 18px
  line-height: 24px
  letter-spacing: 0.05em
  &:hover,
  &:hover .arrow
    color: darken($second, 50% )
.arrow
  color: $hover  
</style>