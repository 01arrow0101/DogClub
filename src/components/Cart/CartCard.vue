<template>
  <div class="cart-card">
    <div class="row">
      <div class="card-img">
        <img :src="card.path" :alt="card.title">
      </div>
      <div class="cart-title">
        <h2>{{ card.title }} 123</h2>
      </div>
    </div>
    <div class="price">
      <el-input-number  size="small" style="width: 80px" v-model="num" :min="1" :max="10" @change="handleChange" />
      <p class="total-price">{{ card.discount }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const num = ref(1)
const handleChange = (num) => {
  console.log(num)
}
const props = defineProps({
  card: Object
})

</script>

<style lang="sass" scoped>
.row
  justify-content: space-between
  align-items: center
  margin-bottom: 50px
.cart-card
  border: 1px solid #eee
  padding: 8px
  border-radius: .5rem
  box-shadow: 0 1px 10px 1px #eeee
.price
  display: flex
  justify-content: end
  gap: 16px

</style>

