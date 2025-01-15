<template>
  <div class="container">
    <h2 class="title-h2 center">Щасливий клієнт</h2>
    <swiper
      class="row"
      :modules="modules"
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="breakpoints"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="card in cards" :key="card.title">
        <CardCustomer :person="card" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardCustomer from '../Customer/CardCustomer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const onSwiper = swiper => {
  // console.log(swiper)
}

const onSlideChange = () => {
  // console.log('slide change')
}

const modules = [Navigation, Pagination, Scrollbar, A11y]
const breakpoints = {
  1440: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 1,
  },
}

const cards = ref([
  {
    folder: '/src/assets/img/Main/Customer/Christin.jpeg',
    title: 'Крістін і Том',
    text: 'Подобається загальне враження від тренування!',
    quality: 5,
  },
  {
    folder: '/src/assets/img/Main/Customer/Anna.jpeg',
    title: 'Анна і Тоббі',
    text: 'Чудові продукти та вчасна доставка.',
    quality: 4,
  },
  {
    folder: '/src/assets/img/Main/Customer/Sindy.jpeg',
    title: 'Сінді і Кітч',
    text: 'Чудова робота з тренером!',
    quality: 5,
  },
  {
    folder: '/src/assets/img/Main/Customer/Sindy.jpeg',
    title: 'Сінді і Кітч',
    text: 'Чудова робота з тренером!',
    quality: 5,
  },
])
</script>

<style lang="sass" scoped>
.swiper
  max-width: 1064px
  width: 100%

.row
  justify-content: center

</style>
