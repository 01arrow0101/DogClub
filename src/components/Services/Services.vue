<template>
  <div class="bg">
    <div class="container">
      <h2 class="title-h2 center">Категорія послуг</h2>
      <div class="content">
        <div class="cards row">
          <Card
            @click="goTo(service.name, service.path)"
            v-for="service in services"
            :key="service.name"
            :service="service"
          />
          <router-link v-if="isShow" to="/services" class="linkMore" href="#"
            >Більше послуг
            <Svg
              folder="/src/assets/img/Main/Services"
              name="Arrow"
              class="arrow"
            ></Svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/Services/Card.vue'
import Svg from '@/components/Svg/Svg.vue'
import { useModuleStore } from '@/stores/modulesStore'
import { useDataBaseStore } from '@/stores/dataBaseStore'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const moduleStore = useModuleStore()
const dataBaseStore = useDataBaseStore()
const services = ref([
  {
    folderIcon: '/src/assets/img/Main/Services',
    title: 'Грумінг',
    name: 'Grooming',
    path: '/grooming',
    isShow: 'Грумінг'
  },
  {
    folderIcon: '/src/assets/img/Main/Services',
    title: 'Харчування',
    name: 'nutrition',
    path: '/nutrition',
    isShow: 'Харчування'
  },
  {
    folderIcon: '/src/assets/img/Main/Services',
    title: 'Тренування',
    name: 'training',
    path: '/training',
    isShow: 'Тренування'
  },
  {
    folderIcon: '/src/assets/img/Main/Services',
    title: 'Купання',
    name: 'bathing',
    path: '/bathing',
    isShow: 'Купання'
  },
])

const goTo = (category, path) => {
  moduleStore.setCategory(category)
  const serviceExists = services.value.find(el => el.path === path)

  if (serviceExists) {
    dataBaseStore.filterCards = []
    switch (path) {
      case '/nutrition':
      dataBaseStore.loader = true
        setTimeout(() => {
          dataBaseStore.filterCards = dataBaseStore.cards.filter(el => el.collection === 'nutrition')
          dataBaseStore.loader = false
        },1000)
        break
      case '/bathing':
        dataBaseStore.loader = true
        setTimeout(() => {
          dataBaseStore.filterCards = dataBaseStore.cards.filter(el => el.collection === 'bathing')
          dataBaseStore.loader = false
        },1000)
        break
      case '/training':
      dataBaseStore.loader = true
        setTimeout(() => {
          dataBaseStore.filterCards = dataBaseStore.cards.filter(el => el.collection === 'training')
          dataBaseStore.loader = false
        },1000)
        break
      case '/grooming':
      dataBaseStore.loader = true
        setTimeout(() => {
          dataBaseStore.filterCards = dataBaseStore.cards.filter(el => el.collection === 'grooming')
          dataBaseStore.loader = false
        },1000)
        break
      default:
        console.error('Error: Unknown path')
        return
    }

    router.push(`/services${path}`)
  } else {
    console.error('Error: Path not found')
  }
}

defineProps({
  isShow: Boolean,
})
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
  @media(max-width: 768px)
    padding: 40px 8px
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
    gap: 8px
.linkMore
  align-self: end
  color: $hover

  display: flex
  align-items: center
  gap: 8px

  font-style: 18px
  line-height: 24px
  letter-spacing: 0.05em
  // &:hover,
  &:hover .arrow
    animation: arrow 1.5s ease infinite
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
