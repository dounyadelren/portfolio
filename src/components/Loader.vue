<script setup></script>
<template>
  <div id="loader">
    <img id="logoDD" src="../assets/img/LogoDD.png" />
  </div>
</template>
<style scoped>
html, body, div {
  cursor: wait;
  width: 100%;
  height: 100%;
  background: white;
  padding: 0;
  margin: 0;
}
#logoDD {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
}
</style>
