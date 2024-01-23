import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'


const options = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
}

export const router = createRouter(options);