<template>
  <label class="label" :for="input.label">
    <input
      class="input"
      v-model="input.valueInput"
      :type="input.type"
      :placeholder="input.label"
    />
    <Svg :folder="input.iconPath" class="icon" :name="input.iconName"></Svg>
  </label>
</template>

<script setup>
import Svg from '@/components/Svg/Svg.vue';

const props = defineProps({
  input: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
$primary: #FF9F0E
$second: #000
.label
  position: relative
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
.icon
  position: absolute
  top: 50%
  transform: translateY(-50%)
  left: 40px
  width: 32px
  color: $primary
</style>
