<template>
  <main class="happy-customer">
    <div class="bg">
      <div class="container">
        <h2 class="title-h2 center">Щасливі клієнти</h2>
        <div class="content">
          <div class="customer-reviews">
            <div v-for="(review, index) in reviews" :key="index" class="review-card">
              <div class="review-header">
                <h3 class="title-h3">{{ review.name }}</h3>
                <p class="review-date">{{ review.date }}</p>
              </div>
              <p class="review-text">{{ review.text }}</p>
            </div>
          </div>
          <div class="customer-form">
            <h3 class="title-h3">Залиште свій відгук</h3>
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
                <label for="review">Відгук</label>
                <textarea id="review" v-model="formData.review" required></textarea>
              </div>
              <AppButton type="submit" class="btn">Надіслати відгук</AppButton>
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

const reviews = ref([
  {
    name: 'Джон Доу',
    date: '15 жовтня 2023',
    text: 'Чудовий сервіс та дружній персонал! Настійно рекомендую. '
  },
  {
    name: "Джейн Сміт",
    date: '22 вересня 2023',
    text: 'Догляд був найвищим. Мій вихованець виглядав дивовижно!'
  },
  {
    name: "Аліса Джонсон",
    date: '10 серпня 2023',
    text: 'Відмінний досвід. Обов’язково повернеться! '
  }
])

const formData = ref({
  name: '',
  email: '',
  review: ''
})

const submitForm = () => {
  console.log('Review submitted:', formData.value)
  reviews.value.push({
    name: formData.value.name,
    date: new Date().toLocaleDateString(),
    text: formData.value.review
  })
  formData.value = {
    name: '',
    email: '',
    review: ''
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/main.sass'
$text-secondary: #4D4D4D
$text-primary: #181817
$border: #C4C4C4
$text-hover: #FF9F0E
$text-light: #fff
.title-h2
  color: $text-hover
.happy-customer
  .bg
    max-width: 1440px
    background: url('../assets/img/Main/HappyCustomer/bg.png') center / cover no-repeat
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
      background: url('../assets/img/Main/HappyCustomer/bgArrow.svg') center / cover no-repeat
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

  .customer-reviews
    flex: 1
    max-width: 600px

    .review-card
      background: rgba(255, 255, 255, 0.8)
      border-radius: 8px
      padding: 24px
      margin-bottom: 24px
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)

      &:last-child
        margin-bottom: 0

      .review-header
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 16px

        .title-h3
          margin-bottom: 0

        .review-date
          color: $text-secondary
          font-size: 14px

      .review-text
        color: $text-primary
        font-size: 16px

  .customer-form
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

        color: $second

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
        background: darken($hover, 10%)

.input
  width: 100%
  padding: 12.5px 35px 12.5px 80px
  outline: 1px solid $primary
  border-color: transparent
  border-radius: 8px

  color: $second

  font-size: 1.125rem
  line-height: 24px
  letter-spacing: 0.05em
  &::placeholder
    color: $primary
  &:focus
    outline: 3px dashed $primary
    transition: outline .3s
</style>
