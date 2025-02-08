<template>
    <div class="container bg-dog">
      <div class="modal-window">
        <div class="modal-content center">
          <h2 class="title-h2">Наші фахівці подбають про вашого друга</h2>
          <p class="text">Заповніть форму, щоб ми могли з вами зв'язатися!</p>
          <form @submit.prevent="submitForm">
            <div class="inputs">
              <Input
                v-for="input in inputItems"
                :key="input.label"
                :input="input"
              />
            </div>
            <div class="button-form">
              <AppButton>Надіслати</AppButton>
            </div>
            <div class="license">
              <label class="text-license" for="check">
                <input required v-model="isAgree" :checked="isAgree" type="checkbox" name="check" />
                Я згоден з політикою конфіденційності
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {sendToTelegram} from '@/sendToTelegram'
import AppButton from '../Button/AppButton.vue'
import Input from '../Modal/Input.vue'

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
// @import '/src/assets/main.sass'
$primary: #fff
$second: #839AA9

.modal
  &-window
    position: relative
    padding: 168px 0 92px 0
    @media(max-width: 768px)
      padding: 40px 0
    &::before
      content: ''
      position: absolute
      bottom: 160px
      left: -300px
      width: 488px
      height: 520px
      background: url('/src/assets/img/Main/Forma/small-dog.png') center / cover no-repeat
      @media (max-width:768px)
        display: none
    &::after
      content: ''
      position: absolute
      bottom: 0
      right: -100px
      width: 322px
      height: 752px
      background: url('/src/assets/img/Main/Forma/big-dog.png') center / cover no-repeat
      @media (max-width:768px)
        display: none
  &-content
    position: relative
    max-width: 37.8125rem
    width: 100%
    margin: 0 auto
    @media (max-width: 768px)
      padding: 70px
    @media (max-width: 480px)
      padding: 40px
.close
  position: absolute
  top: 32px
  right: 32px
  border-radius: 50%
  padding: 8px 12px
  @media (max-width: 480px)
    top: 16px
    right: 16px
.title-h2
  margin-bottom: 16px
  @media(max-width: 480px)
    font-size: 22px
.text
  margin-bottom: 42px
  font-size: 18px
  line-height: 24px
  letter-spacing: 0.05em
  color: $second
.inputs
  display: flex
  flex-direction: column
  gap: 24px
  margin-bottom: 24px
.button-form
  margin-bottom: 16px
.license
  display: flex
  gap: 8px
  justify-content: center
  align-items: center
  color: $second
</style>
