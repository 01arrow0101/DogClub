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
    <div class="weight">Вес: {{item.weight}}</div>
    <div class="price">{{item.discount > 0 ? item.discount : item.price}}$ <span v-if="item.discount > 0">{{item.price}}$</span></div>
    <div class="btn">
      <AppButton @action="addToCart(item)">Купити</AppButton>
    </div>
</div>
</template>
<script setup>
import AppButton from '/src/components/Button/AppButton.vue'
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore()

const addToCart = (item)=>{
  cartStore.addToCart(item)
}

const props = defineProps({
  item: Object
})
</script>

<style lang="sass" scoped>
$primary: #839AA9
.card
  max-width: 18rem
  width: 100%
  display: flex
  flex-direction: column
.img
  margin: 0 auto 8px
  width: 160px
  height: 302px
  & img
    width: 100%
    height: 100%
    object-fit: cover
.code
  font-size: 14px
  line-height: 1rem
  color: $primary
  margin-bottom: 16px
  flex: 1 1 auto
  & span
    margin-left: 16px
.text
  font-size: 16px
  line-height: 1.1875rem
  margin-bottom: 8px
  text-align: left
.weight
  text-align: left
  font-size: 16px
  line-height: 1.1875rem
  margin-bottom: 24px
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
