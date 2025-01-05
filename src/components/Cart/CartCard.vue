<template>
  <div class="cart-card">
    <div class="row">
      <div class="card-img">
        <img :src="card.path" :alt="card.title" />
      </div>
      <div class="cart-title">
        <h2>
          {{ card.title }} Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Placeat ad modi, pariatur voluptatibus aut quaerat perferendis!
          Tempore quia ratione ipsam a doloribus optio quasi. Tempora, maxime
          officia? Praesentium, dolores dolorem?
        </h2>
      </div>
    </div>
    <div class="price">
      <el-input-number
        size="small"
        style="width: 80px"
        v-model="num"
        :min="1"
        :max="10"
        @change="handleChange(num, card.discount, card.id)"
      />
      <p class="total-price">{{ parseFloat(card.total).toFixed(2) }} $</p>
    </div>
    <el-button @click="cartStore.deleteProduct(card.id)">Delete</el-button>
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
.row
  justify-content: space-between
  align-items: center
  gap: 16px
.cart-card
  border: 1px solid #fff
  padding: 8px
  border-radius: .5rem
  box-shadow: 0 2px 10px 2px #fff
  background: rgba(255, 255, 255, 0.9)
  margin-bottom: 24px
.price
  display: flex
  justify-content: end
  gap: 16px
</style>
