import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'




export const useTicketStore = defineStore('tickets', {
  state: () => ({
    tickets: JSON.parse(localStorage.getItem('tickets') || '[]')
  }),
  actions: {
    saveToStorage() {
      localStorage.setItem('tickets', JSON.stringify(this.tickets))
    },
    create(ticket) {
      if (!ticket.title || !ticket.status) {
        toast.error('Title and Status are required.')
        return
      }
      ticket.id = Date.now()
      this.tickets.push(ticket)
      this.saveToStorage()
      toast.success('Ticket created!')
    },
    update(id, updatedTicket) {
      const index = this.tickets.findIndex(t => t.id === id)
      if (index !== -1) {
        this.tickets[index] = { ...this.tickets[index], ...updatedTicket }
        this.saveToStorage()
        toast.success('Ticket updated!')
      } else {
        toast.error('Ticket not found.')
      }
    },
    delete(id) {
      if (confirm('Are you sure you want to delete this ticket?')) {
        this.tickets = this.tickets.filter(t => t.id !== id)
        this.saveToStorage()
        toast.info('Ticket deleted.')
      }
    }
  }
})
