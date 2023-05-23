import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import UiView from '../views/UiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects/web',
      name: 'web',
      component: ProjectsView
    },
    {
      path: '/projects/ui',
      name: 'ui',
      component: UiView
    }
  ]
})

export default router
