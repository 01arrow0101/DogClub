import { defineStore } from "pinia";
import { ref } from "vue";

export const useModuleStore = defineStore('moduleStore', () =>{
const isOpenModalWindow = ref(false)
const isAgree = ref(false)
const activeTabCategory = ref('Nutrition')

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

const inputItems = ref([
  {
    label: 'Your name',
    valueInput: '',
    iconName: 'user',
    iconPath: '/src/assets/img/Modal',
    type: 'text'
  },
  {
    label: 'Pet name',
    valueInput: '',
    iconName: 'pet',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
  {
    label: 'Your phone',
    valueInput: '',
    iconName: 'phone',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
  {
    label: 'Your email',
    valueInput: '',
    iconName: 'mail',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
])

const showModal = () => {
  isOpenModalWindow.value = ! isOpenModalWindow.value
}

const  submitForm = () =>{
  inputItems.value.forEach(el =>{
    if(isAgree.value){
      console.log(el.valueInput);
    }else{
      console.log(`Error License not read please, checked license`);
    }
  })
  }
const setCategory = (arg) => {
  activeTabCategory.value = arg
}
return {isOpenModalWindow,showModal,linkItems,inputItems,submitForm,isAgree,activeTabCategory,setCategory}
})
