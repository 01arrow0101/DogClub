<template>
  <Modal v-if="isActive" :closeModal="isActive" />
  <div class="container p-t">
    <div class="row space-between">
      <AppLogo />
      <nav v-for="link in links" :key="link.title" class="nav row gap">
        <div class="nav-link">
          <a href="#" @click="goTo(link.title)">{{ link.title }}</a>
        </div>
      </nav>
      <div class="contacts row">
        <div @click="cartStore.showCart = !cartStore.showCart" class="basket"><span class="curr-cart">{{ cartStore.currentCart }}</span></div>
        <div class="contact-btn">
          <AppButton @action="isActiveModal">Contact us</AppButton>
        </div>
        <AppButton @action="isOpen = true" class="burger btn"
          ><span></span
        ></AppButton>
      </div>
    </div>
  </div>
  <div class="container">
    <BurgerMenu :links="links" @action="isOpen = false" v-if="isOpen" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from '../Logo/AppLogo.vue'
import BurgerMenu from './BurgerMenu.vue'
import AppButton from '../Button/AppButton.vue'
import Modal from '../Modal/Modal.vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

const router = useRouter()
const cartStore = useCartStore()

function goTo(title) {
  switch (title) {
    case 'Less talk':
      router.push('/')
      break
    case 'Services category':
      router.push('/services')
      break
    case 'Happy customer':
      router.push('/customer')
      break
    case 'Contact':
      isActiveModal()
      break
    default:
      router.go()
  }
}

const isOpen = ref(false)
const isActive = ref(false)

const links = ref([
  { title: 'Less talk' },
  { title: 'Services category' },
  { title: 'Happy customer' },
  { title: 'Contact' },
])

function isActiveModal() {
  isActive.value = true
}
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
$hover: #FF9F0E
$second: #fff
.active
  color: $hover
.p-t
  padding-top: 32px
.nav
  &-link
    &:hover
      color: $hover
  @media (max-width: 480px)
    display: none

// .btn
//   background: $hover
//   color: $second
//   border-radius: .5rem
//   border-color: transparent
//   padding: 16px 32px
//   cursor: pointer
//   & span
//     font-size: 18px
//     font-weight: 500
//     line-height: 21px
//   &:hover
//     background: darken($hover, 10% )
//     color: $second

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
