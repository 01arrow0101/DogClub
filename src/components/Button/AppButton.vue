<template>
<button @click="$emit('action')" class="btn">
  <span><slot></slot></span>
  </button>
</template>
<script setup>
defineEmits(['action'])
</script>
<style lang="sass" scoped>
$primary:#FF9F0E
$second: #fff

.btn
  background: $primary
  color: $second
  border-radius: .5rem
  border-color: transparent
  padding: 16px 32px
  cursor: pointer
  transition: all 1s ease
  & span
    font-size: 18px
    font-weight: 500
    line-height: 21px
  &:hover
    transition: box-shadow .5s ease
    background:$primary
    color: $second
    border-color: transparent
    box-shadow: 4px 4px 10px 3px rgba(0, 0, 0, 50%)

.btn.active-tab
  background-color: rgba($primary, 100%)
  color: $second
  border-color: transparent
  box-shadow: 4px 4px 10px 3px rgba(0, 0, 0, 0.5)
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3))



</style>
