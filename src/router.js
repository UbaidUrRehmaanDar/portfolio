import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Vision from './pages/Vision.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/vision', name: 'Vision', component: Vision }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router