<template>
  <div class="cart">
    <div class="cart-btn">
      <el-button @click="cartStore.showCart = !cartStore.showCart" class="close" circle><span class="close_line"></span></el-button>
    </div>
    <div class="cart-content border">
      <div v-if="cartStore.carts.length !== 0" >
        <CartCard v-for="item in cartStore.carts" :key="item.id" :card="item"/>
      </div>
      <div v-else class="text">Empty</div>
    </div>
    <div>Количество товаров: {{ cartStore.carts.length }} СУММА: {{ cartStore.totalAllPrice }} $</div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import CartCard from './CartCard.vue';

const cartStore = useCartStore()
</script>

<style lang="sass" scoped>
.border
  border-top: 1px solid #fff
  border-left: 1px solid #fff
  border-radius: 32px
  padding: 16px
.cart
  margin: 48px 8px

  &-btn
    position: absolute
    top: 10px
    left: 8px
    width: 32px
    height: 32px
.close
  &_line
    position: relative
    width: 16px
    height: 1px
    left: 1px
    top: 1px
    &::after
      content: ''
      position: absolute
      left: 50%
      top: 50%
      background:#000
      width: 100%
      height: 100%
      transform: translate(-50%, -50%) rotate(45deg)
    &::before
      content: ''
      position: absolute
      left: 50%
      top: 50%
      background:#000
      width: 100%
      height: 100%
      transform: translate(-50%, -50%) rotate(-45deg)

</style>
