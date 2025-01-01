import { defineStore } from 'pinia'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const useNutritionStore = defineStore('nutritionStore', () => {
  const cards = ref([])

  const getNutrition = async () => {
    const nutritions = collection(db, 'nutrition');
    const nutritionSnapshot = await getDocs(nutritions);
    const nutritionList = nutritionSnapshot.docs.map(doc => doc.data());
    console.log(nutritionList);

    return nutritionList;
  }
})
