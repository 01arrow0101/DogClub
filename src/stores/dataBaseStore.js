import { defineStore } from 'pinia'
import {  ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const useDataBaseStore = defineStore('dataBase', () => {
  const loader = ref(false)
  const cards = ref([])
  const activeTab = ref('stars')

  const getDataBase = async (collectionDB) => {
    loader.value = true
    const querySnapshot = await getDocs(collection(db, collectionDB));
    querySnapshot.forEach((doc) => {
      cards.value.push({
        id: doc.id,
        ...doc.data()
      })
    });
    loader.value = false
  }

  const sortBy = async(arg) =>{
    loader.value = true
   const sortPrice = await[...cards.value].sort((a,b) => b[arg] - a[arg])
   cards.value = sortPrice
   activeTab.value = arg
    loader.value = false
  }

    const sortByName = async(title) => {
      loader.value = true
      const byName = await [...cards.value].sort((a,b) => a[title].localeCompare(b[title]))
      cards.value = byName
   activeTab.value = title
   loader.value = false
    }

  return { cards, getDataBase, sortBy, sortByName, activeTab, loader }
})
