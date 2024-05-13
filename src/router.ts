import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/Home.vue'
import AddView from './components/Add.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/add', component: AddView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
