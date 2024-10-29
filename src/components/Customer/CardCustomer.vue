<template>
  <div class="wrapper center">
    <div class="img-person">
      <img :src="person.folder" :alt="person.title" />
    </div>
    <div class="person-info">
      <p class="text">{{ person.title }}</p>
      <p class="text">{{ person.text }}</p>
    </div>
    <div class="quality">
      <Svg folder="/src/assets/img/Main/Customer/icon/" :name="person.quality < 1 ? 'whiteBone' : 'goldBone'"></Svg>
      <Svg folder="/src/assets/img/Main/Customer/icon/" :name="person.quality < 2 ? 'whiteBone' : 'goldBone'"></Svg>
      <Svg folder="/src/assets/img/Main/Customer/icon/" :name="person.quality < 3 ? 'whiteBone' : 'goldBone'"></Svg>
      <Svg folder="/src/assets/img/Main/Customer/icon/" :name="person.quality < 4 ? 'whiteBone' : 'goldBone'"></Svg>
      <Svg folder="/src/assets/img/Main/Customer/icon/" :name="person.quality < 5 ? 'whiteBone' : 'goldBone'"></Svg>
      <span>{{ person.quality }}/5</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Svg from '../Svg/Svg.vue'

const props = defineProps({
  person: Object,
})

const quality = ref([
  {
    folder: '',
    name: ''
  }
  ])
</script>
<style lang="sass" scoped>
  $bg: rgb(131, 154, 169)

.wrapper
  max-width: 344px
  background: $bg
  border-radius: 24px
  overflow: hidden
.img-person
  height: 326px
  overflow: hidden
</style>
