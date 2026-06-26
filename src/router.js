import { createRouter, createWebHistory } from 'vue-router'

import Home           from './pages/Home.vue'
import About          from './pages/About.vue'
import Projects       from './pages/Projects.vue'
import Vision         from './pages/Vision.vue'
import Contact        from './pages/Contact.vue'
import Achievements   from './pages/Achievements.vue'
import Skills         from './pages/Skills.vue'
import Experience     from './pages/Experience.vue'
import Certifications from './pages/Certifications.vue'

const routes = [
  { path: '/',              name: 'Home',           component: Home           },
  { path: '/about',         name: 'About',          component: About          },
  { path: '/projects',      name: 'Projects',       component: Projects       },
  { path: '/vision',        name: 'Vision',         component: Vision         },
  { path: '/contact',       name: 'Contact',        component: Contact        },
  { path: '/achievements',  name: 'Achievements',   component: Achievements   },
  { path: '/skills',        name: 'Skills',         component: Skills         },
  { path: '/experience',    name: 'Experience',     component: Experience     },
  { path: '/certifications',name: 'Certifications', component: Certifications },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
