<template>
  <div class="container">
   <GoToBack />
    <div class="row">
      <div class="img">
      <img :src="service.path" :alt="service.id" />
    </div>

    <div class="service-detail">
      <div class="title-h3 center">
        {{ service.title }}
      </div>
      <div class="code">
        <div v-if="service.new" style="color: red">NEW</div>
        vendor code: {{ service.code }} <span>
           <Svg folder="/src/assets/img/Cart/" name="star" :class="service.stars >= 1 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart/" name="star" :class="service.stars > 2 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart/" name="star" :class="service.stars > 3 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart/" name="star" :class="service.stars > 4 ? 'gold' : 'grey'"></Svg>
           <Svg folder="/src/assets/img/Cart/" name="star" :class="service.stars == 5 ? 'gold' : 'grey'"></Svg>
          </span>
      </div>

      <div class="weight">
        Вес: {{ service.weight }}
        <span
          v-if="service.discount != 0"
          style="color: red; font-size: 14px; font-weight: 900"
        >
          - {{ service.discount }}%</span
        >
      </div>
      <div class="price">
        {{ service.discountPrice > 0 ? service.discountPrice : service.price }} ₴
        <span v-if="service.discount > 0">{{ service.price }} ₴</span>
      </div>
      <div class="btn">
        <AppButton v-if="!service.inCart" @action="addToCart(service)"
          >Купити</AppButton
        >
        <AppButton v-else @click="showCart"> У кошику </AppButton>
      </div>
    </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
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
const service = ref({});

const showCart = () => (cartStore.showCart = !cartStore.showCart);

const addToCart = (item) => {
  cartStore.addToCart(item);
};

onMounted(() => {
  const { collection, id } = route.params;

  // Находим объект в dataBaseStore.cards
  const foundService = dataBaseStore.cards.find(
    (el) => el.collection === collection && el.id === id
  );

  if (foundService) {
    service.value = {...foundService};
  } else {
    // Если объект не найден, перенаправляем на страницу 404
    router.push({ name: 'NotFound' });
  }
});
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
.service-detail
  max-width: 600px
  margin: 0 auto
  padding: 20px
  text-align: center


img
  max-width: 100%
  height: auto

</style>
