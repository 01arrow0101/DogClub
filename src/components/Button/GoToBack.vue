<template>
 <div class="item-router">
      <a class="hover-link row" @click='router.go(-1)'>
         <span>
          <Svg
              folder="/src/assets/img/Main/Services"
              name="Arrow"
              class="arrow"
            ></Svg>
          </span>
          назад
         </a>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Svg from '../Svg/Svg.vue';

const router = useRouter()
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
.row
  gap:8px
.item-router
  margin-bottom: 24px
.hover-link
  color: $hover
  cursor: pointer
  &:hover .arrow
    color: $hover
    animation: arrow 1.5s ease infinite
.arrow
  transform: rotate(-180deg)
  color: $hover
  &:hover
@keyframes arrow
  0%
    transform: translateX(0) rotate(-180deg)
  50%
    transform: translateX(-30px) rotate(-180deg)
  100%
    transform: translateX(0) rotate(-180deg)
</style>
