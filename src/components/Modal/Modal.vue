<template>
  <div class="overlay">
    <div class="container">
      <div class="modal-window">
        <div class="modal-content center">
          <AppButton @action="moduleStore.showModal" class="close">X</AppButton>
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
                <input v-model="isAgree" required :checked="isAgree" type="checkbox" name="check" />
                Я згоден з політикою конфіденційності
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useModuleStore } from '@/stores/modulesStore';
import AppButton from '../Button/AppButton.vue'
import Input from './Input.vue'

const moduleStore = useModuleStore()



const sendToViber = async (formData) => {
  const AUTH_TOKEN = 'ТВОЙ_VIBER_AUTH_TOKEN'; // Замініть на свій токен
  const USER_ID = 'USER_ID_ОДЕРЖУВАЧА'; // Замініть на ID користувача
  const URL = 'https://chatapi.viber.com/pa/send_message';

  const messageData = {
    receiver: USER_ID,
    type: "text",
    text: `📩 Нова заявка:\n
    🏷 Ім'я: ${formData.name}
    🐶 Улюбленець: ${formData.pet}
    📞 Телефон: ${formData.tel}
    📧 Пошта: ${formData.mail}`,
    sender: {
      name: "Мій Бот",
      avatar: "https://example.com/avatar.jpg" // Замінити на посилання на іконку бота
    }
  };

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'X-Viber-Auth-Token': AUTH_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageData)
    });

    const result = await response.json();
    console.log('✅ Дані надіслано в Viber:', result);
  } catch (error) {
    console.error('❌ Помилка надсилання у Viber:', error);
  }
};

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
    isAgree.value  = false
  });

  sendToViber(formData); // Відправка в Viber
};
</script>

<style lang="sass" scoped>
// @import '/src/assets/main.sass'
$primary: #fff
$second: #839AA9
.overlay
  position: fixed
  padding-top: 50px
  top: 0
  left: 0
  z-index: 999
  width: 100%
  height: 100%

  background-color: rgba(0, 0, 0, 0.5)
  backdrop-filter: blur(10px)
  transition: backdrop-filter 1s ease

  display: flex
  justify-content: center


.modal
  &-window
    max-width: 55rem
    max-height: 55rem

    background: $primary
    border-radius: 32px

    display: flex
    justify-content: center
    align-items: center
  &-content
    position: relative
    padding: 142px 140px
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
.text
  margin-bottom: 42px
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
