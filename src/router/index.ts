import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/components/pages/Home.vue'
import About from '@/components/pages/About.vue'
import Contacts from '@/components/pages/Contacts.vue'
import Order from '@/components/pages/Order.vue'

Vue.use(VueRouter)


export const routes: RouteConfig[] = [
  {
    path: '//',
    name: 'home',
    component: Home,
    meta: {
      title: 'Главная'
    } 
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'О нас'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta: {
      title: 'Связь'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    // meta: {
    //   title: 'Корзина'
    // }
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
