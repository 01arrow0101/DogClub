<template>
  <div class="content">
    <div class="container">
      <div class="col">
        <AppLogo />
        <AppButton @action="$emit('action')" class="burger btn">
          <span></span>
        </AppButton>
        <nav class="nav col gap p-t">
          <div v-for="link in links" :key="link.title" class="nav-link">
            <a href="#"> {{ link.title }}</a>
          </div>
        </nav>
        <div class="contacts">
          <div class="contact-btn center">
            <AppButton>Contact us</AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AppLogo from '../Logo/AppLogo.vue'
import AppButton from '../Button/AppButton.vue'
const props = defineProps({
  links: Object,
})

const links = ref(props.links)

defineEmits(['action'])
</script>
<style lang="sass" scoped>
@import '/src/assets/main.sass'
$hover: #FF9F0E
$second: #fff
.container
  padding-top: 32px
.nav
  &-link
    &:hover
      color: $hover
.burger
  position: absolute
  right: 24px
  top: 32px
  width: 24px
  height: 24px
  padding: 4px
  cursor: pointer
  &:hover
    background: darken($hover, 10%)
  & span
    display: block
    position: relative
    width: 100%
    height: 1px
    &::before
     content: ''
     position: absolute
     top: 0px
     left: 0
     transform: rotate(-45deg)
     width: 100%
     height: 1px
     background: #fff
    &::after
     content: ''
     position: absolute
     top: 0px
     left: 0
     transform: rotate(45deg)
     width: 100%
     height: 1px
     background: #fff
.gap
  gap: 40px
  align-items: center
.p-t
  padding-top: 100px
  margin-bottom: 50px
.content
  position: absolute
  top: 0
  left: 0
  background: $second
  width: 100vw
  height: 100vh
  z-index: 9999
</style>
