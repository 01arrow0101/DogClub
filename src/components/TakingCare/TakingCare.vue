<template>
<div class="container padding">
  <div class="row">
    <div class="left">
      <div class="title">З турботою про Вашу розумну собаку!</div>
      <p class="text">Зв’язок між людиною та собакою — це стосунки <br/>між собаками і людьми</p>
      <AppButton>Досліджуйте більше</AppButton>
      <div class="bgMedia">
        <img src="/src/assets/img/Main/bgMedia.png" alt="bgMedia">
      </div>
    </div>
    <div class="right dog"></div>
  </div>
</div>
</template>

<script setup>
import AppButton from '../Button/AppButton.vue'
</script>

<style lang="sass" scoped>
.padding
  padding-top: 212px
  padding-bottom: 60px
  @media(max-width: 768px)
    padding: 100px 0
  @media(max-width: 480px)
    padding: 34px 0
.row
  position: relative
  justify-content: space-between
  @media (max-width:768px)
    text-align: center
    justify-content: center

.left
  position: relative
  width: 635px
  &::after
    content: ''
    position: absolute
    top: -60px
    right: -640px
    width: 828px
    height: 513px
    background: url('../src/assets/img/Main/bg1Home.png') center / contain no-repeat
    @media (max-width: 768px)
      width: 0
      height: 0
      display: none

.bgMedia
  position: relative
  display: none
  width: 0
  height: 0
  z-index: -1
  @media(max-width: 768px)
    display: block
    width: 313px
    position: absolute
    left: 0
    right: 0
    margin: 0 auto
    bottom: 70px
  @media(max-width: 480px)
    bottom: 130px
.right
  position: relative
  background: url('../src/assets/img/Main/dog.png') right / contain no-repeat
  width: 506px
  height: 516px
  @media(max-width:768px)
    display: none

</style>
