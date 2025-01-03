import { defineStore } from 'pinia'
import {  ref } from 'vue'
import { useNutritionStore } from './nutritionStore'



export const useCartStore = defineStore('cartStore', () => {
  const showCart = ref(false)
  const carts = ref([])

  const addToCart = (id) => {
  const nutritionStore = useNutritionStore()
  carts.value.push({...id})
}
return{showCart,carts,addToCart}
})
