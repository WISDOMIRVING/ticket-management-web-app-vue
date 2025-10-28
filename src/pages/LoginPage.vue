<template>
  <div class="auth-page">
    <h2>Login</h2>

    <form @submit.prevent="handleLogin">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" required />

      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" required minlength="6" />

      <button type="submit">Login</button>
    </form>

    <p>
      Don’t have an account?
      <router-link to="/auth/signup">Sign up</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()

const email = ref('')
const password = ref('')

function handleLogin() {
  const success = auth.login(email.value, password.value)
  if (success) {
    router.push('/dashboard')
  } else {
    alert('Invalid email or password.')
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
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0056b3;
}

p {
  margin-top: 1rem;
  text-align: center;
}
</style>
