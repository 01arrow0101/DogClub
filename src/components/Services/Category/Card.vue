<template>
  <div class="card center">
    <div class="img">
      <router-link :to="`/services/${item.collection}/${item.id}`"><img :src="item.path" :alt="item.id" /></router-link>
    </div>
    <div class="code">
      <div v-if="item.new" style="color: red">NEW</div>
      vendor code: {{ item.code }} <span>
         <Svg folder="/src/assets/img/Cart/" name="star" :class="item.stars >= 1 ? 'gold' : 'grey'"></Svg>
         <Svg folder="/src/assets/img/Cart/" name="star" :class="item.stars > 2 ? 'gold' : 'grey'"></Svg>
         <Svg folder="/src/assets/img/Cart/" name="star" :class="item.stars > 3 ? 'gold' : 'grey'"></Svg>
         <Svg folder="/src/assets/img/Cart/" name="star" :class="item.stars > 4 ? 'gold' : 'grey'"></Svg>
         <Svg folder="/src/assets/img/Cart/" name="star" :class="item.stars == 5 ? 'gold' : 'grey'"></Svg>
        </span>
    </div>
    <div class="text">
      {{ item.title }}
    </div>
    <div class="weight">
      Вес: {{ item.weight }}
      <span
        v-if="item.discount != 0"
        style="color: red; font-size: 14px; font-weight: 900"
      >
        - {{ item.discount }}%</span
      >
    </div>
    <div class="price">
      {{ item.discountPrice > 0 ? item.discountPrice : item.price }} ₴
      <span v-if="item.discount > 0">{{ item.price }} ₴</span>
    </div>
    <div class="btn">
      <AppButton v-if="!item.inCart" @action="addToCart(item)"
        >Купити</AppButton
      >
      <AppButton v-else @click="showCart"> У кошику </AppButton>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore'
import AppButton from '/src/components/Button/AppButton.vue'
import Svg from '@/components/Svg/Svg.vue'

const cartStore = useCartStore()

const showCart = () => (cartStore.showCart = !cartStore.showCart)

const addToCart = item => {
  cartStore.addToCart(item)
}
defineProps({
  item: Object,
})
</script>

<style lang="sass" scoped>
$primary: #839AA9
$second: #FF9F0E
.gold
  color:  $second
.grey
  color: $primary
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
    object-fit: contain
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
  display: flex
  justify-content: space-between
  padding: 0 8px
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
