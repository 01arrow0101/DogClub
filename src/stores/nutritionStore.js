import { defineStore } from 'pinia'
import {  computed, ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const useNutritionStore = defineStore('nutritionStore', () => {
  const cards = ref([])

  const getNutrition = async () => {
    const querySnapshot = await getDocs(collection(db, "nutritions"));
    querySnapshot.forEach((doc) => {
      cards.value.push({
        id: doc.id,
        ...doc.data()
      })
    });
  }

  const sortBy = (arg) =>{
   const sortPrice = [...cards.value].sort((a,b) => b[arg] - a[arg])
   cards.value = sortPrice
  }

    const sortByName = (title) => {
      const byName = [...cards.value].sort((a,b) => a[title].localeCompare(b[title]))
      cards.value = byName
    }

  return { cards, getNutrition, sortBy, sortByName }
})
