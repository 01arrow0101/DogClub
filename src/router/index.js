import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServicesCategory from '../views/ServicesCategory.vue'
import Customer from '@/views/Customer.vue'
import Contact from '@/views/Contact.vue'
import Nutrition from '@/components/Services/Category/Nutrition.vue'
import Grooming from '@/components/Services/Category/Grooming.vue'
import Training from '@/components/Services/Category/Training.vue'
import Bathing from '@/components/Services/Category/Bathing.vue'
import ServiceDetail from '@/components/Services/ServiceDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      isActive: false,
      component: HomePage
    },
    {
      path: '/services',
      name: 'services',
      isActive: false,
      component: ServicesCategory
    },
    {
      path: '/services/nutrition',
      name: 'nutrition',
      isActive: false,
      component: Nutrition
    },
    {
      path: '/services/grooming',
      name: 'grooming',
      isActive: false,
      component: Grooming
    },
    {
      path: '/services/training',
      name: 'training',
      isActive: false,
      component: Training
    },
    {
      path: '/services/bathing',
      name: 'bathing',
      isActive: false,
      component: Bathing
    },
    {
      path: '/customer',
      name: 'customer',
      isActive: false,
      component: Customer
    },
    {
      path: '/contact',
      name: 'contact',
      isActive: false,
      component: Contact
    },
    {
      path: '/services/:collection/:id',
      name: 'ServiceDetail',
      component: ServiceDetail,
    },
  ]
})

export default router
