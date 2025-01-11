<template>
  <div class="cart">
    <div class="cart-btn">
      <AppButton  @click="cartStore.showCart = !cartStore.showCart" class="close-btn">X</AppButton>
    </div>
    <div class="cart-content">
    <h2 class="title-h2">{{cartStore.carts.length < 1 ? 'В корзине нет товаров' : 'Моя Корзина'}} </h2>
    <div v-if="cartStore.carts.length !== 0" >
      <CartCard v-for="item in cartStore.carts" :key="item.id" :card="item"/>
      <hr/>
    </div>
  </div>
  <div v-if="cartStore.carts.length === 0" class="cart-total">
    <p class="text">Добавляйте понравившиеся товары в корзину</p>
    </div>
  <div v-else class="cart-total">
    <div class="sum">Итого: <span> {{ cartStore.totalAllPrice }}$</span></div>
    <div class="sum">Скидка: <span> {{ cartStore.totalAllPrice }}$</span></div>
    <div class="sum">Всего: <span class="total_bold"> {{ cartStore.totalAllPrice }}$</span></div>
    <div class="cart_total-btn">
      <AppButton @click="submitForm" class="btn_accept">Оформить заказ</AppButton>
      <AppButton @click="cartClear" class="btn btn_clear">Очистить корзину</AppButton>
    </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import CartCard from './CartCard.vue';
import AppButton from '../Button/AppButton.vue';

const cartStore = useCartStore()

const submitForm = () => {
  alert('Заказ оформлен')
}
const cartClear = () =>{
  alert('Корзина очищена')
  cartStore.carts = []
}
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
.title-h2
  font-size: 30px
  margin-bottom: 24px
  font-weight: 700
.cart
  margin: 48px 8px
  &-btn
    position: absolute
    top: 10px
    left: 8px
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
.close-btn
  width: 32px
  height: 32px
  padding: 8px
  border-radius: 50%
  padding-top: 2px
  padding-bottom: 2px
.cart-total
  display: flex
  flex-direction: column
  gap: 16px
.sum
  display: flex
  justify-content: space-between
.total_bold
  font-weight: 900
  font-size: 22px
.cart_total-btn
  display: flex
  flex-direction: column
  gap: 16px
.cart_total-btn .btn_clear
  background: #c45656
</style>
