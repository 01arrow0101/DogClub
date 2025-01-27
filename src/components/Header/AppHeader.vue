<template>
  <div class="container p-t">
    <div class="row space-between">
      <AppLogo />
      <nav v-for="link in moduleStore.linkItems" :key="link.title" class="nav row gap">
        <div class="nav-link">
          <a class="link" :class="link.isActive ? 'active' : ''" href="#" @click.prevent="goTo(link.path)">{{ link.title }}</a>
        </div>
      </nav>
      <div class="contacts row">
        <div @click="cartStore.showCart = !cartStore.showCart" class="basket"><span class="curr-cart">{{ cartStore.currentCart }}</span></div>
        <div class="contact-btn">
          <AppButton @action="moduleStore.showModal">Зв'яжіться з нами</AppButton>
        </div>
        <AppButton @action="isOpen = true" class="burger btn"
          ><span></span
        ></AppButton>
      </div>
    </div>
  </div>
  <div class="container">
    <BurgerMenu :links="moduleStore.linkItems" @close="isOpen = false" v-if="isOpen" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch} from 'vue'
import AppLogo from '../Logo/AppLogo.vue'
import BurgerMenu from './BurgerMenu.vue'
import AppButton from '../Button/AppButton.vue'
import { useRouter, useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { useModuleStore } from '@/stores/modulesStore'

const router = useRouter()
const route = useRoute()
const cartStore = useCartStore()
const moduleStore = useModuleStore()

const isOpen = ref(false)


const updateActiveLink = (path) => {
  moduleStore.linkItems.forEach((el) => {
    el.isActive = el.path === path;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  });
};


const goTo = (path) => {
  moduleStore.linkItems.forEach(el => {
    if( el.path === path){
      router.push(path)
      el.isActive = true
    }else{
      el.isActive = false
    }
  })
}

onMounted(() => {
  updateActiveLink(route.path);
});

watch(
  () => route.path,
  (newPath) => {
    updateActiveLink(newPath);
  }
);

</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
$hover: #FF9F0E
$second: #fff
.active
  color: $hover
  transition: color .5s ease
.p-t
  padding: 32px 0 16px 0
.nav
  &-link
    transition: color .5s ease
    &:hover
      color: $hover
      transition: color .5s ease

  @media (max-width: 480px)
    display: none
.curr-cart
  position: relative
  top: -4px
  right: -32px
.burger
  display: none
  width: 24px
  height: 24px
  padding: 4px
  @media( max-width: 480px)
    display: block
  &:hover
    background: darken($hover, 10%)
  & span
    display: block
    position: relative
    width: 100%
    height: 1px
    background: #fff
    &::before
     content: ''
     position: absolute
     top: -4px
     left: 0
     width: 100%
     height: 1px
     background: #fff
    &::after
     content: ''
     position: absolute
     top: 4px
     left: 0
     width: 100%
     height: 1px
     background: #fff

.contacts
  @media(max-width:768px)
    flex-direction: column-reverse
  @media (max-width: 480px)
    flex-direction: row

.contact-btn
  @media (max-width: 480px)
    display: none

.space-between
  justify-content: space-between

.gap
  gap: 48px
  @media (max-width: 768px)
    gap: 24px

.contacts
  gap: 24px

.basket
  position: relative
  width: 40px
  height: 40px
  cursor: pointer
  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 40px
    height: 40px
    background: url('/src/assets/img/Header/basket.svg') center / cover no-repeat

.row
  align-items: center
</style>
