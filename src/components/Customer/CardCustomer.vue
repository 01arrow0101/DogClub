<template>
  <div class="wrapper center">
    <div class="img-person">
      <img class="customer" :src="person.folder" :alt="person.title" />
    </div>
    <div class="person-info">
      <p class="text text-title">{{ person.title }}</p>
      <p class="text">{{ person.text }}</p>
    </div>
    <div class="row">
    <div class="quality">
      <Svg
        folder="/src/assets/img/Main/Customer/icon"
        :name="person.quality < 1 ? 'whiteBone' : 'goldBone'"
      ></Svg>
      <Svg
        folder="/src/assets/img/Main/Customer/icon"
        :name="person.quality < 2 ? 'whiteBone' : 'goldBone'"
      ></Svg>
      <Svg
        folder="/src/assets/img/Main/Customer/icon"
        :name="person.quality < 3 ? 'whiteBone' : 'goldBone'"
      ></Svg>
      <Svg
        folder="/src/assets/img/Main/Customer/icon"
        :name="person.quality < 4 ? 'whiteBone' : 'goldBone'"
      ></Svg>
      <Svg
        folder="/src/assets/img/Main/Customer/icon"
        :name="person.quality < 5 ? 'whiteBone' : 'goldBone'"
      ></Svg>

    </div>
      <span class="span-quality">{{ person.quality }}/5</span>
    </div>
  </div>
</template>

<script setup>
import Svg from '../Svg/Svg.vue'

defineProps({
  person: Object,
})


</script>
<style lang="sass" scoped>
  $bg: rgb(131, 154, 169)
  $primary: #fff
  $second: #F1F3FF
  $gold: #FFD02B

.wrapper
  max-width: 344px
  height: 500px
  background: $bg
  border-radius: 24px
  overflow: hidden
  border-top: 0.3px solid $gold
  border-bottom: 0.3px solid $gold
  display: flex
  flex-direction: column
.img-person
  height: 326px
  overflow: hidden
  & img
    width: 100%
    height: 100%
    object-fit: cover
.row
  justify-content: space-around
.img-person
  margin-bottom: 16px
.person-info
  margin-bottom: 24px
  flex: 1 1 auto
.text
  font-size: 16px
  line-height: 19px
  color: $second
.text-title
  margin-bottom: 8px
  font-size: 24px
  line-height: 28px
  font-weight: 600
  color: $primary
.quality
  display: flex
  gap: 8px
  margin-bottom: 16px
.span-quality
  color:$gold
</style>
