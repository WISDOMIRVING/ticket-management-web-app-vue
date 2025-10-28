<template>
  <div class="auth-page">
    <h2>Sign Up</h2>

    <form @submit.prevent="handleSignup">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" required />

      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" required minlength="6" />

      <button type="submit">Sign Up</button>
    </form>

    <p>
      Already have an account?
      <router-link to="/auth/login">Login</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify' // make sure the package is installed and CSS imported in main

const router = useRouter()
const auth = useAuthStore()

const email = ref('')
const password = ref('')

function handleSignup() {
  const success = auth.signup(email.value, password.value)
  if (success) {
    toast.success('Signup successful! You can now log in.')
    router.push('/auth/login')
  } else {
    toast.error('Signup failed. Please try again.')
  }
}
</script>

<style scoped>
.auth-page {
  max-width: 400px;
  margin: 6rem auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 1rem;
  font-weight: 600;
}

input {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  margin-top: 1.5rem;
  padding: 0.8rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #218838;
}

p {
  margin-top: 1rem;
  text-align: center;
}
</style>
