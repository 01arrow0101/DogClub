<template>
  <div class="overlay">
    <div class="container">
      <div class="modal-window">
        <div class="modal-content center">
          <AppButton class="close">X</AppButton>
          <h2 class="title-h2">Our experts will take care of your friend</h2>
          <p class="text">Fill out the form so we can contact you!</p>
          <form action="">
            <div class="inputs">
              <Input
                v-for="input in inputsItem"
                :key="input.label"
                :input="input"
              />
            </div>
            <div class="button-form">
              <AppButton>Submit</AppButton>
            </div>
            <div class="license">
              <label class="text-license" for="check">
                <input type="checkbox" name="check" />
                I agree to the privacy policy
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '../Button/AppButton.vue'
import Input from './Input.vue'

const inputsItem = ref([
  {
    label: 'Your name',
    valueInput: '',
    iconName: 'user',
    iconPath: '/src/assets/img/Modal',
    type: 'text'
  },
  {
    label: 'Pet name',
    valueInput: '',
    iconName: 'pet',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
  {
    label: 'Your phone',
    valueInput: '',
    iconName: 'phone',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
  {
    label: 'Your email',
    valueInput: '',
    iconName: 'mail',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
])

</script>

<style lang="sass" scoped>
// @import '/src/assets/main.sass'
$primary: #fff
.overlay
  position: absolute
  top: 0
  left: 0
  z-index: 999
  width: 100%
  height: 100%
  background: rgba(0,0 ,0 , 45% )

  display: flex
  justify-content: center
  align-items: center

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
.close
  position: absolute
  top: 32px
  right: 32px
  border-radius: 50%
  padding: 8px 12px
.title-h2
  margin-bottom: 16px
.text
  margin-bottom: 42px
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
</style>
