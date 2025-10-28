// src/store/authStore.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('ticketapp_session') || null
  }),
  actions: {
    login(email, password) {
      // example/mock auth
      if (email === 'test@demo.com' && password === '123456') {
        const token = 'ticket_token_' + Date.now()
        localStorage.setItem('ticketapp_session', token)
        this.user = { email }
        this.token = token
        return true
      }

      // optionally, check the mock_user stored on signup
      const stored = JSON.parse(localStorage.getItem('mock_user') || 'null')
      if (stored && stored.email === email && stored.password === password) {
        const token = 'ticket_token_' + Date.now()
        localStorage.setItem('ticketapp_session', token)
        this.user = { email }
        this.token = token
        return true
      }

      return false
    },

    signup(email, password) {
      // store a mock user — return true for success
      const user = { email, password }
      localStorage.setItem('mock_user', JSON.stringify(user))
      this.user = { email }
      return true
    },

    logout() {
      localStorage.removeItem('ticketapp_session')
      this.user = null
      this.token = null
      // keep store UI-free: do NOT call toast here
    }
  }
})
