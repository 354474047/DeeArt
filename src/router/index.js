import {createRouter, createWebHistory} from 'vue-router'
import Index from '../components/content/index/Index'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/content/About/About')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
