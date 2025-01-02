import { defineStore } from 'pinia'
import {  ref } from 'vue'



export const useCartStore = defineStore('cartStore', () => {
  const showCart = ref(false)

return{showCart}
})
