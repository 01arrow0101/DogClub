<template>
  <div class="logo">
    DOG<span>CLUB</span>
  </div>
</template>
<style lang="sass" scoped>
@import '/src/assets/main.sass'
$hover: #FF9F0E
.logo
  position: relative
  color: $hover
  font-size: 2rem
  font-family: $font
  padding-left: 43px
  cursor: default
  & span
    font-size: 1.5rem
    font-weight: 300
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 0
    width: 43px
    height: 43px
    transform: translateY(-50%)
    background: url('/src/assets/img/Header/logo/logo.svg') center / cover no-repeat
</style>