<template>
  <div class="cart-card">
    <div class="row">
      <div class="card-img">
        <img :src="card.path" :alt="card.title" />
      </div>
      <div class="cart-title">
        <h2>
          {{ card.title }} 
        </h2>
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
        @change="handleChange(num, card.discount, card.id)"
      />
      <p class="total-price">{{ parseFloat(card.total).toFixed(2) }} $</p>
    </div>
    <div class="delete">
      <el-button type="danger"  @click="cartStore.deleteProduct(card.id)">Delete</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const num = ref(1)
const handleChange = (num, price, id) => {
  cartStore.carts.forEach(item => {
    if (item.id === id) {
      item.total = num * price
    }
  })
}
const props = defineProps({
  card: Object,
})
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
.delete
  text-align: center
.input
  margin-bottom: 24px
.row
  justify-content: space-between
  align-items: center
.cart-card
  border: 1px solid #fff
  padding: 8px
  border-radius: 1.5rem
  border-top: 3px solid $hover
  border-bottom: 3px solid $hover
  border-left: 3px solid $hover

  box-shadow: 0 2px 10px 2px #fff
  background: rgba(255, 255, 255, 0.9)
  margin-bottom: 24px
.price
  display: flex
  justify-content: end
  gap: 16px
</style>
