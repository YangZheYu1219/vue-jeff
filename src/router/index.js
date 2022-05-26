import { createRouter, createWebHashHistory } from 'vue-router'
import AccountView from '../views/accountView.vue'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/accountView',
    name: 'accountView',
    component: AccountView
  },
  {
    path: '/cartView',
    name: 'cartView',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
