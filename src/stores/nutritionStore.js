import { defineStore } from 'pinia'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const useNutritionStore = defineStore('nutritionStore', () => {
  const cards = ref([{
    title: 'title',
    text: 'text',
  }])

  const getNutrition = async () => {
    const querySnapshot = await getDocs(collection(db, "nutritions"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
})
