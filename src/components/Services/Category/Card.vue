<template>
<div class="card center">
  <div class="img">
    <img :src="item.path" :alt="item.id">
  </div>
  <div class="code">
    <span v-if="item.new" style="color: red">NEW</span>
    vendor code: {{item.id}} <span>{{item.stars}} stars</span>
  </div>
  <div class="text">
    {{item.title}}
    </div>
    <div class="price">{{item.discount}}$ <span>{{item.price}}$</span></div>
    <div class="btn">
      <AppButton>Buy</AppButton>
    </div>
</div>
</template>

<script setup>
import AppButton from '/src/components/Button/AppButton.vue'

const props = defineProps({
  item: Object
})
</script>

<style lang="sass" scoped>
$primary: #839AA9
.card
  max-width: 18rem
  width: 100%
.img
  margin-bottom: 8px
.code
  font-size: 14px
  line-height: 1rem
  color: $primary
  margin-bottom: 16px
  & span
    margin-left: 16px
.text
  font-size: 16px
  line-height: 1.1875rem
.price
  font-size: 18px
  line-height: 21px
  font-weight: 600
  margin-bottom: 24px
  & span
      font-size: 14px
      font-weight: 400
      line-height: 16px
      text-decoration: line-through
      color: $primary
      margin-left: 8px
</style>
