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

        <form @submit.prevent="submitForm">
          <div class="forma">
          <Input
            v-for="input in inputItems"
            :key="input.label"
            :input="input"
          />
            <div class="button-form">
              <AppButton>Надіслати</AppButton>
            </div>
            <div class="license">
              <label class="text-license" for="check">
                <input v-model="isAgree" required :checked="isAgree" type="checkbox" name="check" />
                Я згоден з політикою конфіденційності
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
import {  ref } from 'vue'
import {sendToTelegram} from '@/sendToTelegram'
import { useModuleStore } from '@/stores/modulesStore'
import AppLogo from '../Logo/AppLogo.vue'
import Svg from '@/components/Svg/Svg.vue'
import Input from '../Modal/Input.vue'
import AppButton from '../Button/AppButton.vue'

const moduleStore = useModuleStore()

const isAgree = ref(false)
const inputItems = ref([
  {
    label: "Ваше ім'я",
    valueInput: '',
    iconName: 'user',
    iconPath: '/src/assets/img/Modal',
    type: 'text'
  },
  {
    label: "Ім'я улюбленця",
    valueInput: '',
    iconName: 'pet',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
  {
    label: 'Ваш телефон',
    valueInput: '',
    iconName: 'phone',
    iconPath: '/src/assets/img/Modal',
    type: 'tel',
  },
  {
    label: 'Ваш пошта',
    valueInput: '',
    iconName: 'mail',
    iconPath: '/src/assets/img/Modal',
    type: 'mail',
  },
])

const submitForm = () => {
  if (!isAgree.value) {
    console.log('Error: License not read, please check the license');
    return;
  }

  // Створюємо об'єкт із введеними даними
  const formData = {
    name: inputItems.value[0].valueInput,
    pet: inputItems.value[1].valueInput,
    tel: inputItems.value[2].valueInput,
    mail: inputItems.value[3].valueInput
  };

  console.log('Отримані дані:', formData);
  alert('Дякуємо, заявка прийнята!');

  inputItems.value.forEach(el => {
    el.valueInput = '';
    isAgree.value = false
  });
  sendToTelegram(formData)
};
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
