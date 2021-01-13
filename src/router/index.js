import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ButtonsPage from '../pages/ButtonsPage.vue'
import ProgressPage from '../pages/ProgressPage.vue'

const routes = [
  {
    path: '/', component: HomePage,
  },
  {
    path: '/buttons', component: ButtonsPage,
  },
  {
    path: '/progress', component: ProgressPage,
  },
]

// there is also createWebHashHistory and createMemoryHistory
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { router }
