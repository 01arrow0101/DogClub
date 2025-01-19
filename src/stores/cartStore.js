import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useDataBaseStore } from './dataBaseStore'

export const useCartStore = defineStore('cartStore', () => {
  const showCart = ref(false)
  const carts = ref([])
  const num = ref(1)

  const addToCart = (product) => {
    // Проверяем, есть ли уже объект с таким id в массиве carts
    const existingProduct = carts.value.find(el => el.id === product.id)

    if (existingProduct) {
      console.warn(`Продукт с id ${product.id} уже находится в корзине. Увеличиваем количество.`)
      // existingProduct.num += 1
      existingProduct.total = existingProduct.num * existingProduct.price
      existingProduct.discountSum = existingProduct.num * (existingProduct.price - existingProduct.discountPrice)
    } else {
      // Если объекта с таким id нет, добавляем его
      carts.value.push({
        ...product,
        inCart: true,
        num: 1,
        total: product.price,
        discountSum: product.price - product.discountPrice
      })
      console.log('Текущая корзина:', carts.value)
      const dataBase = useDataBaseStore()
      dataBase.cards.find(el => el.id === product.id).inCart = true
    }
  }

  const deleteProduct = id => {
    carts.value = carts.value.filter(el => el.id !== id)
  }

  const totalPrice = computed(() => carts.value.reduce((acc, el) => acc + Number(el.total), 0))
  const discountSum = computed(() => carts.value.reduce((acc, el) => acc + Number(el.discountSum), 0))
  const totalAllPrice = computed(() => Number(totalPrice.value) - Number(discountSum.value))

  const currentCart = computed(() => carts.value.length)

  return { showCart, carts, addToCart, deleteProduct, currentCart,totalPrice,totalAllPrice,discountSum,num }
})
