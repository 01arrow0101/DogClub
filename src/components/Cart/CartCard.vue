<template>
  <div class="cart-card">
    <div class="row">
      <div class="card-img">
        <router-link :to="`/services/${card.collection}/${card.id}`"><img :src="card.path" :alt="card.title" /></router-link>
      </div>
      <div class="cart-title">
        <h3 class="title-h3">
          <router-link :to="`/services/${card.collection}/${card.id}`">{{ card.title }}</router-link>
        </h3>
        <p class="title-h3">
          Вес: {{ card.weight }}
        </p>
      </div>
    </div>
    <div class="price">
      <el-input-number
        class="input"
        size="small"
        style="width: 80px"
        v-model="num"
        :min="1"
        :max="10"
        @change="handleChange"
      />
      <p class="total-price">{{ parseFloat(card.total).toFixed(2) }} ₴</p>
    </div>
    <div class="delete">
      <el-button type="danger" @click="removeProduct(card.id)">Delete</el-button>
    </div>
  </div>
</template>

<script setup>


import { ref, watch } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useDataBaseStore } from '@/stores/dataBaseStore'
const props = defineProps({
  card: Object,
})

const cartStore = useCartStore()
const dataBaseStore = useDataBaseStore()
const num = ref(props.card.num)

const removeProduct = (removeId) => {
  cartStore.cartLoader = true
  setTimeout(() => {
    cartStore.deleteProduct(props.card.id)
    dataBaseStore.cards.find(el => el.id === removeId).inCart = false
    dataBaseStore.product.inCart = false
    cartStore.cartLoader = false
  },300)
}

const handleChange = () => {
  cartStore.cartLoader = true
  const product = cartStore.carts.find(el => el.id === props.card.id)
  if (product) {
    setTimeout(() => {
      product.num = num.value
      product.total = product.num * product.price
      product.discountSum = product.num * (product.price - product.discountPrice)
      cartStore.cartLoader = false
    },300)
  }
}


watch(
  () => props.card.num,
  (newVal) => {
    num.value = newVal
  }
)
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
.card-img
  width: 70px
  & img
    width: 70px
.cart-title
  display: flex
  flex-direction: column
  gap: 16px
.delete
  text-align: center
.input
  margin-bottom: 24px
  background: #000
.row
  gap: 16px
  align-items: center
.cart-card
  border: 1px solid #fff
  padding: 8px
  border-radius: 1.5rem
  border-top: 3px solid $hover
  border-bottom: 3px solid $hover
  border-left: 3px solid $hover

  box-shadow: 0 2px 10px 2px #fff
  background: #fff
  margin-bottom: 24px
.price
  display: flex
  justify-content: end
  gap: 16px
.total-price
  font-size: 18px
  font-weight: 700
</style>
