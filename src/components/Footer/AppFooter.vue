<template>
  <div class="container">
    <div class="row">
      <div class="content">
        <div class="logo-social">
          <AppLogo class="logo" />
          <div class="social">
            <a href="#">
              <Svg
                folder="/src/assets/img/Social"
                name="instagram"
                class="instagram"
              ></Svg>
            </a>
            <a href="#">
              <Svg
                folder="/src/assets/img/Social"
                name="facebook"
                class="facebook"
              ></Svg>
            </a>
          </div>
        </div>
        <nav class="nav gap col">
          <div v-for="link in links" :key="link.title" class="nav-link">
            <a href="#">{{ link.title }}</a>
          </div>
        </nav>
        <div class="forma">
          <Input
            v-for="input in inputsItem"
            :key="input.label"
            :input="input"
          />
            <div class="button-form">
              <AppButton>Submit</AppButton>
            </div>
            <div class="license">
              <label class="text-license" for="check">
                <input type="checkbox" name="check" />
                I agree to the privacy policy
              </label>
            </div>
        </div>
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from '../Logo/AppLogo.vue'
import Svg from '@/components/Svg/Svg.vue'
import Input from '../Modal/Input.vue'
import AppButton from '../Button/AppButton.vue'

const links = ref([
  { title: 'Less talk' },
  { title: 'Services category' },
  { title: 'Happy customer' },
  { title: 'Contact' },
])


const inputsItem = ref([
  {
    label: 'Your email',
    valueInput: '',
    iconName: 'mail',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
  {
    label: 'Your cmc',
    valueInput: '',
    iconName: 'cmc',
    iconPath: '/src/assets/img/Footer',
    type: 'text',
  }
])
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
$license:#839AA9
.container
  padding-top: 72px
.row
  justify-content: center
  @media (max-width: 768px)
    flex-direction: column-reverse
.content
  display: flex
  align-items: center
  gap: 94px
  @media (max-width: 768px)
    flex-direction: column
    text-align: center
    gap:24px
.logo
  margin-bottom: 24px
.instagram
  margin-right: 8px
.instagram,
.facebook
  width: 40px
.nav
  &-link
    &:hover
      color: $hover
.forma
  display: flex
  flex-direction: column
  gap: 16px
  margin-bottom: 16px
.button-form
  text-align: center
.license
  text-align: center
  color: $license        
.gap
  gap: 16px
.image
  width: 292px
  height: 19.0625rem
  background: url('/src/assets/img/Footer/dog.png') center / cover no-repeat
  @media (max-width: 768px)
    width: 128px
    height: 146px
    background-size: contain
    margin: 0 auto
</style>
a
