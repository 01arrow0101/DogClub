import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServicesCategory from '../views/ServicesCategory.vue'
import Customer from '@/views/Customer.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesCategory
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})

export default router
