<template>
    <div  :class="loading">
      <div :class="loader"></div>
    </div>
</template>
<script setup>
defineProps({
  loading: String,
  loader: String
})
</script>

<style lang="sass" scoped>
.loading
  position: fixed
  top: 350px
  &_cart
    position: fixed
    right: 250px
    top: 450px
.loader
  border: 16px solid #fff
  border-top: 16px solid #FF9F0E
  border-radius: 50%
  width: 120px
  height: 120px
  animation: spin 2s linear infinite
  &_cart
    width: 60px
    height: 60px
    border: 8px solid #fff
    border-top: 8px solid #FF9F0E
    border-bottom: 8px solid #FF9F0E

    animation: spin 2s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
