<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "../src/components/Navbar.vue"
import Sidebar from "../src/components/Sidebar.vue"
import AOS from 'aos';
import { onMounted, ref, toRefs } from 'vue';
import i18n from "./plugins/i18n";
import { useLoaderStore } from "../src/store/loaderStore";

const loaderStore = useLoaderStore();
const { isLoading } = toRefs(loaderStore)
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
  <Sidebar v-if="!isLoading" />
  <RouterView />
</template>