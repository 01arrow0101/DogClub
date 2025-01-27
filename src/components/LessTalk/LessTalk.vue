
<template>
  <div class="container">
    <div class="content row">
      <div class="left">
       <div class="img">
        <img src="/src/assets/img/Main/LessTalk/dogWithVideo.png" alt="dogWithVideo">
        <a class="linkButton" href="#">
          <Svg folder="/src/assets/img/Main/LessTalk" class="videoButton" name="video"></Svg>
        </a>
      </div>
      </div>
      <div class="right">
        <h2 class="title-h2">Менше розмов і більше прогулянок</h2>
        <p class="text">Іноді наша кар’єра, спосіб життя чи розпорядок дня можуть ускладнити надання вашому вихованцеві рекомендованої кількості вправ, які йому потрібні. Ось чому можна використовувати додаткову руку, щоб вигулювати собак, щоб вони були в ідеальній формі, розумово та фізично.</p>
        <div class="button">
          <AppButton>Досліджуйте більше</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Svg from '/src/components/Svg/Svg.vue'
import AppButton from '/src/components/Button/AppButton.vue'
</script>

<style lang="sass" scoped>
@import '/src/assets/main.sass'
$primary: #839AA9
.content
  justify-content: space-between
  align-items: center
  margin-bottom: 32px
  @media (max-width: 768px)
    flex-direction: column-reverse
    text-align: center
.left
  width: 50%
  @media(max-width: 768px)
    width: 100%
.img
  position: relative
  & img
    width: 100%
    // height: 100%
    @media (max-width: 768px)
      width: 100%
      @media (max-width: 480px)
        display: none
.right
  width: 50%
  @media(max-width: 768px)
    width: 100%
  @media (max-width:480px)
    text-align: start
.linkButton
  position: absolute
  top: 50px
  right: 100px
  @media (max-width: 30rem)
    top: -90px
    right: 0
.videoButton
  color: $primary
  cursor: pointer
  width: 161px
  height: 122px
  @media (max-width: 480px)
    width: 73px
  &:hover
    color: $hover
.button
  text-align: start
</style>
