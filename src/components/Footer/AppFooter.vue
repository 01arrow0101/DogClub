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
                class="instagram social-link"
              ></Svg>
            </a>
            <a  href="#">
              <Svg
                folder="/src/assets/img/Social"
                name="facebook"
                class="facebook social-link"
              ></Svg>
            </a>
          </div>
        </div>
        <nav class="nav gap col">
          <div v-for="link in moduleStore.linkItems" :key="link.title" class="nav-link">
            <a :href="link.path">{{ link.title }}</a>
             <!-- <router-link :to="link.path">{{  link.title }}</router-link> -->
          </div>
        </nav>

        <form @submit.prevent="moduleStore.submitForm">
          <div class="forma">
          <Input
            v-for="input in moduleStore.inputItems"
            :key="input.label"
            :input="input"
          />
            <div class="button-form">
              <AppButton>Submit</AppButton>
            </div>
            <div class="license">
              <label class="text-license" for="check">
                <input v-model="moduleStore.isAgree" required :checked="moduleStore.isAgree" type="checkbox" name="check" />
                I agree to the privacy policy
              </label>
            </div>
        </div>

        </form>
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script setup>
import { useModuleStore } from '@/stores/modulesStore'
import AppLogo from '../Logo/AppLogo.vue'
import Svg from '@/components/Svg/Svg.vue'
import Input from '../Modal/Input.vue'
import AppButton from '../Button/AppButton.vue'

const moduleStore = useModuleStore()
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
