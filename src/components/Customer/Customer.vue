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
import { Navigation, Scrollbar, A11y } from 'swiper/modules'
import Sindy from '/src/assets/img/Main/Customer/Sindy.jpeg'
import Anna from '/src/assets/img/Main/Customer/Anna.jpeg'
import Christin from '/src/assets/img/Main/Customer/Christin.jpeg'
import David from '/src/assets/img/Main/Customer/David.jpeg'

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

const modules = [Navigation, Scrollbar, A11y]
const breakpoints = {
  1440: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 2,
  },
  540: {
    slidesPerView: 1,
  },
}

const cards = ref([
  {
    folder: `${Christin}`,
    title: 'Крістін і Том',
    text: 'Подобається загальне враження від тренування!',
    quality: 5,
  },
  {
    folder: `${Anna}`,
    title: 'Анна і Тоббі',
    text: 'Чудові продукти та вчасна доставка.',
    quality: 4,
  },
  {
    folder: `${Sindy}`,
    title: 'Сінді і Кітч',
    text: 'Чудова робота з тренером!',
    quality: 5,
  },
  {
    folder: `${David}`,
    title: 'Давид і Лексі',
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
