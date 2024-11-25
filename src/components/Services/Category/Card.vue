<template>
<div class="card center">
  <div class="img">
    <img src="/src/assets/img/Main/Services/Category/Nutrition/savory.png" alt="37875">
  </div>
  <div class="code">
    vendor code: 37875 <span>5 stars</span>
  </div>
  <div class="text">
    Dry food for dogs of average breeds Savory 3 kg 
    (turkey and lamb)
    </div>
    <div class="price">136.00$ <span>320.43$</span></div>
    <div class="btn">
      <AppButton>Buy</AppButton>
    </div>
</div>
</template>

<script setup>
import AppButton from '/src/components/Button/AppButton.vue'
</script>

<style lang="sass" scoped>
$primary: #839AA9
.card
  max-width: 18rem
  width: 100%
.img
  margin-bottom: 8px
.code
  font-size: 14px
  line-height: 1rem
  color: $primary
  margin-bottom: 16px
  & span
    margin-left: 16px
.text
  font-size: 16px
  line-height: 1.1875rem
.price
  font-size: 18px
  line-height: 21px
  font-weight: 600
  margin-bottom: 24px
  & span
      font-size: 14px
      font-weight: 400
      line-height: 16px
      text-decoration: line-through
      color: $primary
      margin-left: 8px
</style>  