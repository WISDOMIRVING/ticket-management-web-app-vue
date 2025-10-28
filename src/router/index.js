import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignupPage from '../pages/SignupPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import TicketsPage from '../pages/TicketsPage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/auth/login', name: 'Login', component: LoginPage },
  { path: '/auth/signup', name: 'Signup', component: SignupPage },
  { path: '/dashboard', name: 'Dashboard', component: DashboardPage, meta: { requiresAuth: true } },
  { path: '/tickets', name: 'Tickets', component: TicketsPage, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Auth Guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('ticketapp_session')
  if (to.meta.requiresAuth && !token) {
    next('/auth/login')
  } else {
    next()
  }
})

export default router
