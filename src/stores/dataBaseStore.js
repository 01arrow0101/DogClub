import { defineStore } from 'pinia'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export const useDataBaseStore = defineStore('dataBase', () => {
  const loader = ref(false)
  const cards = ref([])
  const filterCards = ref([])
  const activeTab = ref('stars')
  const collections = ['training', 'bathing', 'nutritions', 'grooming']

  const getDataBase = async () => {
    loader.value = true
    for(const collectionProduct of collections){
      const querySnapshot = await getDocs(collection(db, collectionProduct))

      querySnapshot.forEach(doc => {
        cards.value.push({
          id: doc.id,
          discountPrice:
            doc.data().price - doc.data().price * (doc.data().discount / 100),
          ...doc.data(),
        })
      })
      loader.value = false
    }
  }

  const sortBy = async arg => {
    loader.value = true
    const sortPrice = await [...cards.value].sort((a, b) => b[arg] - a[arg])
    cards.value = sortPrice
    activeTab.value = arg
    loader.value = false
  }

  const sortByName = async title => {
    loader.value = true
    const byName = await [...cards.value].sort((a, b) =>
      a[title].localeCompare(b[title]),
    )
    cards.value = byName
    activeTab.value = title
    loader.value = false
  }

  return {
    cards,
    filterCards,
    getDataBase,
    sortBy,
    sortByName,
    activeTab,
    loader,
    collections
  }
})
