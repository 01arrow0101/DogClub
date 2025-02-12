<template>
  <div class="container">
   <GoToBack />
   <div v-if="dataBaseStore.product !== 0" class="product">
    <div class="row">
      <div class="img">
      <img :src="dataBaseStore.product.path" :alt="dataBaseStore.product.id" />
    </div>

    <div class="service-detail">
      <div class="title-h3 center">
        {{ dataBaseStore.product.title }}
      </div>
      <div class="code">
        <div class="new" v-if="dataBaseStore.product.new" style="color: red">NEW</div>
        vendor code: {{ dataBaseStore.product.code }} <span>
           <Svg folder="/src/assets/img/Cart" name="star" :class="dataBaseStore.product.stars >= 1 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart" name="star" :class="dataBaseStore.product.stars > 2 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart" name="star" :class="dataBaseStore.product.stars > 3 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart" name="star" :class="dataBaseStore.product.stars > 4 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart" name="star" :class="dataBaseStore.product.stars == 5 ? 'gold' : 'grey'"></Svg>
          </span>
      </div>

      <div class="weight">
        Вес: {{ dataBaseStore.product.weight }}
        <span
          v-if="dataBaseStore.product.discount != 0"
          style="color: red; font-size: 14px; font-weight: 900"
        >
          - {{ dataBaseStore.product.discount }}%</span
        >
      </div>
      <div class="price">
        {{ dataBaseStore.product.discountPrice > 0 ? dataBaseStore.product.discountPrice : dataBaseStore.product.price }} ₴
        <span class="discount-decoration" v-if="dataBaseStore.product.discount > 0">{{ dataBaseStore.product.price }} ₴</span>
      </div>
      <div class="btn">
        <AppButton v-if="!dataBaseStore.product.inCart" @action="addToCart(dataBaseStore.product)"
          >Купити</AppButton
        >
        <AppButton v-else @click="showCart"> У кошику </AppButton>
      </div>
    </div>
    </div>
<div class="description">
  <h3 class="title-h3">Опис:</h3>
  <p class="text">{{ dataBaseStore.product.description }}</p>
</div>
   </div>

   <div v-else class="product">
    ТОВАРИ ДЛЯ {{ dataBaseStore.product.collection }}
   </div>


  </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { useDataBaseStore } from '@/stores/dataBaseStore';
import AppButton from '/src/components/Button/AppButton.vue';
import Svg from '@/components/Svg/Svg.vue'
import GoToBack from '../Button/GoToBack.vue';

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const dataBaseStore = useDataBaseStore();

const showCart = () => (cartStore.showCart = !cartStore.showCart);

const addToCart = (item) => {
  cartStore.addToCart(item);
  dataBaseStore.product.inCart = true
};

onMounted(() => {
  const { collection, id } = route.params;

  // Находим объект в dataBaseStore.product.cards
  const foundService = dataBaseStore.cards.find(
    (el) => el.collection === collection && el.id === id
  );

  if (foundService) {
    dataBaseStore.product = {...foundService};
  } else {
    // Если объект не найден, перенаправляем на страницу 404
    router.push({name:'services'});
  }
});
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
$primary: #839AA9
$second: #FF9F0E
.gold
  color:  $second
.grey
  color: $primary
.row
  justify-content: center
  align-items: center
  gap:16px
  margin-bottom: 24px
  @media(max-width: 540px)
    flex-direction: column
.service-detail
  max-width: 600px
  margin: 0 auto
  padding: 20px
  text-align: center

img
  max-width: 100%
  height: auto

.title-h3
  font-size: 1.5rem
  margin-bottom: 40px
.code
  position: relative
  font-size: 14px
  line-height: 1rem
  color: $primary
  margin-bottom: 24px
  & span
    margin-left: 16px
.new
  position: absolute
  top: -20px
  left: 50%
  transform: translateX(-50%)
.text
  font-size: 16px
  line-height: 1.1875rem
  margin-bottom: 24px
  text-align: left
  flex: 1 1 auto
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
.description
  margin-bottom: 40px
</style>
