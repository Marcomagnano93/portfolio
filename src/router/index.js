import { createWebHistory, createRouter } from 'vue-router'

import AppHomepage from '../views/Home.vue'
import About from '../views/About.vue'
import Progetti from '../views/Progetti.vue'




const routes = [
  { path: '/', name:'Home', component: AppHomepage },
  { path: '/About', name: 'About', component: About},
  { path: '/Progetti', name: 'Progetti', component: Progetti}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router