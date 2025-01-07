import { defineStore } from "pinia";
import { ref } from "vue";

export const useModuleStore = defineStore('moduleStore', () =>{
const isOpenModalWindow = ref(false)


const showModal = () => {
  isOpenModalWindow.value = ! isOpenModalWindow.value
}
// const hiddenModal = () => {
//   isOpenModalWindow.value = false
// }

return {isOpenModalWindow,showModal}
})
