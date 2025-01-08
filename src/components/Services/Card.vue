<template>
<a class="cardLink" href="#">
  <div class="wrapper center">
  <Svg :folder="service.folderIcon" :name="service.name" class="icon"></Svg>
  <div class="category">
    <p class="text">{{ service.name }}</p>
  </div>
</div>
</a>
</template>

<script setup>
import Svg from '@/components/Svg/Svg.vue'
import { useModuleStore } from '@/stores/modulesStore';
const moduleStore = useModuleStore()
const props = defineProps({
  service: Object
})

</script>

<style lang="sass" scoped>
@import '@/assets/main'
$primary: #fff
$second: #181817
.wrapper
  width: 240px
  height: 240%
  background: $primary
  padding: 47px
  box-shadow: 0 4px 4px 0 rgba(24, 24, 23, 0.05)
.icon
  margin-bottom: 24px
  color: $second
  &:hover
    // color: $hover
.text
  color: $hover
  margin-bottom: 0
  font-weight: 600
  line-height: 26px
  letter-spacing: 0
.cardLink:hover .icon
  color: $hover
  transition: color .4s ease
</style>
