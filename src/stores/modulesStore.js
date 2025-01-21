import { defineStore } from "pinia";
import { ref } from "vue";

export const useModuleStore = defineStore('moduleStore', () =>{
const isOpenModalWindow = ref(false)
const isAgree = ref(false)
const activeTabCategory = ref('Харчування')

const linkItems = ref([
  { title: 'Менше розмов',
    path: '/',
    isActive: false
   },
  { title: 'Категорія послуг',
    path: '/services',
    isActive: false
   },
  { title: 'Щасливий клієнт',
    path: '/customer',
    isActive: false
   },
  { title: 'Контакт',
    path: '/contact',
    isActive: false
   },
])

const inputItems = ref([
  {
    label: "Ваше ім'я",
    valueInput: '',
    iconName: 'user',
    iconPath: '/src/assets/img/Modal',
    type: 'text'
  },
  {
    label: "Ім'я улюбленця",
    valueInput: '',
    iconName: 'pet',
    iconPath: '/src/assets/img/Modal',
    type: 'text',
  },
  {
    label: 'Ваш телефон',
    valueInput: '',
    iconName: 'phone',
    iconPath: '/src/assets/img/Modal',
    type: 'tel',
  },
  {
    label: 'Ваш пошта',
    valueInput: '',
    iconName: 'mail',
    iconPath: '/src/assets/img/Modal',
    type: 'mail',
  },
])

const showModal = () => {
  isOpenModalWindow.value = ! isOpenModalWindow.value
}
const  submitForm = () =>{
  alert('Дякуємо заявка прийнята!')
  inputItems.value.forEach(el =>{
    el.valueInput = ''
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
