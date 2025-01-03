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
  & span
    font-size: 18px
    font-weight: 500
    line-height: 21px
  &:hover
    background: darken($primary, 10% )
    color: $second

</style>
