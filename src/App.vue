<template>
  <Navbar />
  <div class="container">
    <router-view></router-view>
  </div>
  <Footer />
  <ContactButton />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ContactButton from './components/ContactButton.vue'
</script>