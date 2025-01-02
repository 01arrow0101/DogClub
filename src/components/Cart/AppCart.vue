<template>
  <div calss="cart-wrapper">
    <el-button class="close" circle><span class="close_line"></span></el-button>
hhhd
<br>
asdasdasd
  </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
.cart-wrapper
  position: relative
  padding-top: 52px
.close
  position: absolute
  top: 32px
  right: 16px
  width: 32px
  height: 32px
  &_line
    position: relative
    width: 16px
    height: 1px
    left: 1px
    top: 1px
    &::after
      content: ''
      position: absolute
      left: 50%
      top: 50%
      background:#000
      width: 100%
      height: 100%
      transform: translate(-50%, -50%) rotate(45deg)
    &::before
      content: ''
      position: absolute
      left: 50%
      top: 50%
      background:#000
      width: 100%
      height: 100%
      transform: translate(-50%, -50%) rotate(-45deg)

</style>
