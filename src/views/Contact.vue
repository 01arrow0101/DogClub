<template>
  <main class="contact">
    <div class="bg">
      <div class="container">
        <h2 class="title-h2 center">Зв’яжіться з нами</h2>
        <div class="content">
          <div class="contact-info">
            <div class="info-item">
              <h3 class="title-h3">Адреса</h3>
              <p>123 Вулиця ,  Місто, 12345</p>
            </div>
            <div class="info-item">
              <h3 class="title-h3">Телефон</h3>
              <p>(123) 456-7890</p>
            </div>
            <div class="info-item">
              <h3 class="title-h3">Електронна пошта</h3>
              <p>info@petshop.com</p>
            </div>
          </div>
          <div class="contact-form">
            <h3 class="title-h3">Надішліть нам повідомлення</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Назва</label>
                <input type="text" id="name" v-model="formData.name" required />
              </div>
              <div class="form-group">
                <label for="email">Електронна пошта</label>
                <input type="email" id="email" v-model="formData.email" required />
              </div>
              <div class="form-group">
                <label for="message">Повідомлення</label>
                <textarea id="message" v-model="formData.message" required></textarea>
              </div>
              <AppButton type="submit" class="btn">Надіслати повідомлення</AppButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/Button/AppButton.vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style lang="sass" scoped>
@use 'sass:color'
@import '@/assets/main.sass'
$text-secondary: #4D4D4D
$text-primary: #181817
$border: #C4C4C4
$text-hover: #FF9F0E
$text-light: #fff
.title-h2
  color: $text-hover
.contact
  .bg
    max-width: 1440px
    background: url('../assets/img/Main/Contact/bg.png') center / cover no-repeat
    margin: 0 auto
    padding: 68px 0 95px
    position: relative

    &::after
      content: ''
      position: absolute
      width: 192px
      height: 144px
      top: 0
      right: -80px
      transform: rotate(5deg)
      background: url('../assets/img/Main/Contact/bgArrow.svg') center / cover no-repeat
      @media (max-width: 768px)
        display: none

  .container
    position: relative
  .content
    display: flex
    justify-content: space-between
    align-items: flex-start
    gap: 40px

    @media (max-width: 768px)
      flex-direction: column
      align-items: center

  .contact-info
    flex: 1
    max-width: 400px

    .info-item
      margin-bottom: 24px

      &:last-child
        margin-bottom: 0

      .title-h3
        margin-bottom: 8px

      p
        color: $text-secondary

  .contact-form
    flex: 1
    max-width: 400px

    .title-h3
      margin-bottom: 24px

    .form-group
      margin-bottom: 16px

      &:last-child
        margin-bottom: 0

      label
        display: block
        margin-bottom: 8px
        font-size: 16px
        color: $text-primary

      input,
      textarea
        width: 100%
        padding: 12.5px 35px 12.5px 80px
        outline: 1px solid $text-hover
        border-color: transparent
        border-radius: 8px

        color: $primary

        font-size: 1.125rem
        line-height: 24px
        letter-spacing: 0.05em
        &::placeholder
          color: $primary
        &:focus
          outline: 3px dashed $text-hover
          transition: outline .3s

      textarea
        resize: vertical
        min-height: 120px

    .btn
      display: inline-block
      padding: 12px 24px
      background: $hover
      color: $text-light
      border: none
      border-radius: 8px
      font-size: 16px
      cursor: pointer
      transition: background 0.3s ease

      &:hover
        background: color.scale($hover,$lightness: 10%)
</style>
