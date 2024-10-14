<template>
  <div class="container p-t">
    <div class="row space-between">
      <AppLogo />
      <nav  v-for="link in links" :key="link.title" class="nav row gap">
        <div class="nav-link">
          <a href="#">{{ link.title }}</a>
        </div>
      </nav>
      <div class="contacts row">
        <div class="basket"></div>
        <div class="contact-btn">
          <AppButton class="www">Contact us</AppButton>
        </div>
        <AppButton @action="isOpen = true" class="burger btn"><span></span></AppButton>
      </div>
    </div>
  </div>
  <div class="container">
    <BurgerMenu :links="links" @action="isOpen = false" v-if="isOpen"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from '../Logo/AppLogo.vue'
import BurgerMenu from './BurgerMenu.vue'
import AppButton from '../Button/AppButton.vue'

const isOpen = ref(false)

const links = ref([
  { title: 'Less talk' },
  { title: 'Services category' },
  { title: 'Happy customer' },
  { title: 'Contact' },
])
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
