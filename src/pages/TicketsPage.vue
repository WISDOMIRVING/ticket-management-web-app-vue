<template>
  <div class="tickets-page">
    <header class="tickets-header">
      <h1>Tickets</h1>
      <div class="header-actions">
        <router-link to="/dashboard" class="btn secondary">Back to Dashboard</router-link>
        <button @click="logout" class="logout-btn">Logout</button>
      </div>
    </header>

    <section class="ticket-form">
      <h2>Create New Ticket</h2>
      <form @submit.prevent="createTicket">
        <input v-model="title" type="text" placeholder="Ticket title" required />
        <textarea v-model="description" placeholder="Ticket description" required></textarea>
        <button type="submit">Add Ticket</button>
      </form>
    </section>

    <section class="ticket-list">
      <h2>All Tickets</h2>
      <div v-if="ticketStore.tickets.length === 0" class="empty">No tickets yet.</div>

      <div v-for="ticket in ticketStore.tickets" :key="ticket.id" class="ticket-card">
        <h3>{{ ticket.title }}</h3>
        <p>{{ ticket.description }}</p>
        <div class="status">Status: {{ ticket.status }}</div>
        <div class="actions">
          <button @click="updateStatus(ticket.id, 'in_progress')" v-if="ticket.status === 'open'">Start</button>
          <button @click="updateStatus(ticket.id, 'closed')" v-if="ticket.status === 'in_progress'">Close</button>
          <button @click="deleteTicket(ticket.id)" class="delete-btn">Delete</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useTicketStore } from '../store/ticketStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const ticketStore = useTicketStore()

const title = ref('')
const description = ref('')

function logout() {
  auth.logout()
  router.push('/auth/login')
}

function createTicket() {
  ticketStore.create({
    title: title.value,
    description: description.value,
    status: 'open'
  })
  title.value = ''
  description.value = ''
}

function updateStatus(id, newStatus) {
  ticketStore.update(id, { status: newStatus })
}

function deleteTicket(id) {
  ticketStore.delete(id)
}
</script>

<style scoped>
.tickets-page {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 12px;
}

.tickets-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.ticket-form {
  margin: 2rem 0;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ticket-form input,
.ticket-form textarea {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.ticket-form button {
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.ticket-form button:hover {
  background: #0056b3;
}

.ticket-list {
  margin-top: 2rem;
}

.ticket-card {
  background: white;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.ticket-card h3 {
  margin: 0;
  color: #333;
}

.ticket-card .status {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.actions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.actions button:hover {
  opacity: 0.9;
}

.delete-btn {
  background: #dc3545;
  color: white;
}

.btn {
  padding: 0.8rem 1.5rem;
  background: #007bff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}

.btn.secondary {
  background: #6c757d;
}

.logout-btn {
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.logout-btn:hover {
  background: #c82333;
}

.empty {
  text-align: center;
  color: #777;
  padding: 2rem;
}
</style>
