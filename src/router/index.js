import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-books',
      name: 'create-book',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateBookFormVue.vue')
    },
    {
      path:'/list-books',
      name:'list-books',
      component: () => import('../views/ListAllBooksVue.vue')
    },
    {
      path:'/update-book',
      name:'update-book',
      component: () => import('../views/UpdateBookFormVue.vue')
    }
  ]
})

export default router
