<template>
<div class="bg">
  <div class="container ">
<h2 class="title-h2 center">Services category </h2>
<div class="content">
<div class="cards row">
  <Card @click="goTo(service.name, service.path)" v-for="service in services" :key="service.name" :service="service"/>
  <router-link to="/services" class="linkMore" href="#">more services
    <Svg folder="/src/assets/img/Main/Services" name="Arrow" class="arrow"></Svg>
  </router-link>
</div>
</div>
  </div>
</div>
</template>

<script setup>
import Card from '@/components/Services/Card.vue'
import Svg from '@/components/Svg/Svg.vue'
import { useModuleStore } from '@/stores/modulesStore';

import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const moduleStore = useModuleStore()
const services = ref([
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Grooming',
    path: '/grooming'
},
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Nutrition',
    path: '/nutrition'
},
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Training',
    path: '/training'
},
  {
    folderIcon: '/src/assets/img/Main/Services',
    name: 'Bathing',
    path: '/bathing'
},
])

const goTo = (category, path) => {
  moduleStore.setCategory(category)
  const serviceExists = services.value.some(el => el.path === path);
  if (serviceExists) {
    router.push('/services');
  } else {
    console.error('Error: Path not found');
  }
}

defineEmits(['scroll-to'])
</script>

<style lang="sass" scoped>
@import '@/assets/main'
.bg
  max-width: 1440px
  background: url('../src/assets/img/Main/Services/bg.png') center / cover no-repeat
  margin: 0 auto
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
    @media (max-width: 768px)
      display: none

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
    animation: arrow 0.5s ease
.arrow
  color: $hover
  &:hover
@keyframes arrow
  0%
    transform: translateX(0)
  50%
    transform: translateX(30px)
  100%
    transform: translateX(0)



  </style>
