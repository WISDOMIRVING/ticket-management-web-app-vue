<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Dashboard</h1>
      <button @click="logout" class="logout-btn">Logout</button>
    </header>

    <section class="stats">
      <div class="card" v-for="stat in stats" :key="stat.label">
        <h3>{{ stat.label }}</h3>
        <p>{{ stat.value }}</p>
      </div>
    </section>

    <router-link to="/tickets" class="btn">Manage Tickets</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useTicketStore } from '../store/ticketStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const tickets = useTicketStore()
const router = useRouter()

const stats = computed(() => [
  { label: 'Total Tickets', value: tickets.tickets.length },
  { label: 'Open', value: tickets.tickets.filter(t => t.status === 'open').length },
  { label: 'In Progress', value: tickets.tickets.filter(t => t.status === 'in_progress').length },
  { label: 'Closed', value: tickets.tickets.filter(t => t.status === 'closed').length },
])

function logout() {
  auth.logout()
  router.push('/auth/login')
}
</script>

<style scoped>
.dashboard {
  max-width: 1440px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 12px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #0056b3;
}

.logout-btn {
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background: #c82333;
}
</style>
