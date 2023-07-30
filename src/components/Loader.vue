<script setup></script>
<template>
  <div id="loader">
    <img id="logoDD" src="../assets/img/LogoDD.png" />
  </div>
</template>
<style scoped>
/* Animation du logo */
@keyframes logoAnimation {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.1;
    transform: scale(1.1);
  }
}
html,
body,
div {
  cursor: wait;
  width: 100%;
  height: 100%;
  background: white;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height:80vh
}
#logoDD {
  max-width: 300px;
  animation: logoAnimation 2s infinite;
}
</style>
