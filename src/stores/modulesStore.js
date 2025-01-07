import { defineStore } from "pinia";
import { ref } from "vue";

export const useModuleStore = defineStore('moduleStore', () =>{
const isOpenModalWindow = ref(false)

const linkItems = ref([
  { title: 'Less talk',
    path: '/',
    isActive: false
   },
  { title: 'Services category',
    path: '/services',
    isActive: false
   },
  { title: 'Happy customer',
    path: '/customer',
    isActive: false
   },
  { title: 'Contact',
    path: '/contact',
    isActive: false
   },
])


const showModal = () => {
  isOpenModalWindow.value = ! isOpenModalWindow.value
}


return {isOpenModalWindow,showModal,linkItems}
})
