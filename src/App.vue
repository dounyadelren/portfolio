<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "../src/components/Navbar.vue"
import Sidebar from "../src/components/Sidebar.vue"
import AOS from 'aos';
import { onMounted } from 'vue';

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <Navbar />
      </nav>
    </div>
  </header>
  <Sidebar />
  <RouterView />
</template>