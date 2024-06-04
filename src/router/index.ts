import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import homepet from '../views/homepet.vue'
import about from '../views/about.vue'
import signup from '../views/signup.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue')
    }
  ]
})

export default router
  