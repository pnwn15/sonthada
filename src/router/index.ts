import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import homepet from '../views/homepet.vue'
import about from '../views/about.vue'
import signup from '../views/signup.vue'
import product from '../views/product.vue'
import reset from '../views/reset.vue'
import order from '../views/order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/homepet',
      name: 'homepet',
      component: homepet
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
   
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
  
  ]
})

export default router
  