import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabBar from '../components/tabbar/TabBar.vue'





const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: TabBar,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        component: () => import('../views/HomePage.vue'),
      },
      {
        path: '/add',
        component: () => import('../views/ScannerPage.vue'),
      },
      {
        path: '/list',
        component: () => import('../views/ListPage.vue'),
      },
      {
        path: '/borrow/form',
        component: () => import('../views/FormPage.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
