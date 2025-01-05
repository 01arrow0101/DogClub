import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
  const showCart = ref(false)
  const carts = ref([])
  const productInToCart = ref(false)
  const currentCart = computed(() => carts.value.length)

  const addToCart = id => {
    // Проверяем, есть ли уже объект с таким id в массиве carts
    const isAlreadyInCart = carts.value.some(el => el.id === id.id)

    if (!isAlreadyInCart) {
      productInToCart.value = true
      // Если объекта с таким id нет, добавляем его
      carts.value.push({ ...id, total: ref(id.discount) })
      console.log('Текущая корзина:', carts.value)
    } else {
      console.warn(`Продукт с id ${id.id} уже находится в корзине.`)
    }
  }

  const deleteProduct = id => {
    carts.value = carts.value.filter(el => el.id !== id)
    productInToCart.value = false
  }

const totalAllPrice = computed(()=> carts.value.reduce((acc, el) => acc + Number(el.total), 0))

  return { showCart, carts, addToCart, deleteProduct, currentCart,productInToCart,totalAllPrice }
})
