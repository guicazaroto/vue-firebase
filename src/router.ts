import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/Home.vue'
import AddView from './components/Add.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name:'home', component: HomeView },
    { path: '/add', name: 'add', component: AddView },
  ],
})
