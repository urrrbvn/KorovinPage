import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorksView from '@/views/WorksView.vue'
import JournalView from '@/views/JournalView.vue'
import CallView from '@/views/CallView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:HomeView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path:'/works',
      component: WorksView
    },
    {
      path:'/journal',
      component:JournalView
    },
    {
      path:'/call',
      component: CallView
    }
  ]
})

export default router
