import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useDataBaseStore } from "./dataBaseStore";

export const useModuleStore = defineStore('moduleStore', () =>{
const dataBaseStore = useDataBaseStore()
// ============================================

const isOpenModalWindow = ref(false)
const showModal = () => {
  isOpenModalWindow.value = ! isOpenModalWindow.value
}
// ============================================

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

// ============================================

const isAgree = ref(false)

// ============================================

const activeTabCategory = ref('Харчування')
const setCategory = (arg) => {
  activeTabCategory.value = arg
}
// ============================================

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

// ============================================

const currentPage = ref(1)
const itemsPerPage = 4
// Обчислювана властивість для відображення об'єктів на поточній сторінці
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return dataBaseStore.filterCards.slice(start, end);
});
// Обчислювана властивість для загальної кількості сторінок
const totalPages = computed(() => {
  return Math.ceil(dataBaseStore.filterCards.length / itemsPerPage);
});
// Перехід на попередню сторінку
const prevPage = () => {
  dataBaseStore.loader = true
  setTimeout(()=>{
    if (currentPage.value > 1) {
      currentPage.value--;
    }
    dataBaseStore.loader = false
  },500)
};
// Перехід на наступну сторінку
const nextPage = () => {
  dataBaseStore.loader = true
  setTimeout(()=>{
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  dataBaseStore.loader = false
  },500)
};
// Перехід на конкретну сторінку
const goToPage = (page) => {
  dataBaseStore.loader = true
  setTimeout(()=>{
    currentPage.value = page;
    dataBaseStore.loader = false
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },500)
};

// ============================================

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

  // ============================================

return {isOpenModalWindow,showModal,linkItems,inputItems,submitForm,isAgree,activeTabCategory,setCategory, currentPage, itemsPerPage, paginatedItems, totalPages, prevPage, nextPage, goToPage}
})
