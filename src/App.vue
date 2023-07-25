<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "../src/components/Navbar.vue"
import Sidebar from "../src/components/Sidebar.vue"
import AOS from 'aos';
import { onMounted, ref } from 'vue';
import i18n from "./plugins/i18n";

const locale = ref(localStorage.getItem("selectedLanguage"))

onMounted(() => {
  AOS.init()
  locale.value === "fr" ? i18n.global.locale = locale : i18n.global.locale = 'en' 
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