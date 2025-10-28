<template>
  <div class="landing">
    <header class="landing-header">
      <h1>🎟️ Ticket Manager</h1>
      <p class="tagline">Simplify your support workflow.</p>
      <div class="cta">
        <router-link to="/auth/login" class="btn">Login</router-link>
        <router-link to="/auth/signup" class="btn secondary">Get Started</router-link>
      </div>
    </header>

    <section class="hero">
    <img src="@/assets/wave.svg" alt="Decorative flowing wave pattern in light blue creating a gentle, calming background design element" class="hero-wave" />
      <div class="circle"></div>
    </section>

    <footer class="landing-footer">
      <p>© 2025 TicketApp — All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this static page
</script>

<style scoped>
.landing {
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Header */
.landing-header {
  margin-top: 4rem;
}

.landing-header h1 {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}

/* Buttons */
.cta {
  margin-top: 1rem;
}

.btn {
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  background: #007bff;
  color: white;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: background 0.3s ease;
  display: inline-block;
}

.btn:hover {
  background: #0056b3;
}

.btn.secondary {
  background: #4caf50;
}

.btn.secondary:hover {
  background: #3e8e41;
}

/* Hero Section */
.hero {
  position: relative;
  margin-top: 4rem;
}

.hero-wave {
  width: 100%;
  height: auto;
}

.circle {
  position: absolute;
  top: -50px;
  right: 100px;
  width: 80px;
  height: 80px;
  background: #007bff20;
  border-radius: 50%;
}

/* Footer */
.landing-footer {
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #777;
}

/* Responsive */
@media (max-width: 768px) {
  .landing-header h1 {
    font-size: 2rem;
  }

  .circle {
    right: 50%;
    transform: translateX(50%);
  }

  .cta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
