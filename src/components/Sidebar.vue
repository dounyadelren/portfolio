<script setup></script>
<template>
  <div id="sidebar" class="col-1 d-flex flex-column justify-content-center ms-4 position-sticky is-large">
    <a href="https://github.com/dounyadelren" target="_blank"><img  class="side-logo mb-3" data-aos="fade-right" data-aos-duration="1000" src="../assets/img/github.png" /></a>
    <a href="https://www.linkedin.com/in/dounya-derlen/" target="_blank"><img  class="side-logo mb-3" data-aos="fade-right" data-aos-duration="1500" src="../assets/img/linked.png" /></a>
    <a href="https://www.notion.so/Dounya-Derlen-5d813142438f4dbd835380c229432286?pvs=4" target="_blank"><img  class="side-logo mb-3" data-aos="fade-right" data-aos-duration="2000" src="../assets/img/letter-n.png" /></a>
    <a href="" class=""><img class="side-logo mb-3" data-aos="fade-right" data-aos-duration="2500" src="../assets/img/fr.png" /></a>
    <a href=""><img class="side-logo mb-3" data-aos="fade-right" data-aos-duration="3000" src="../assets/img/en.png" /></a>
    <!-- <a href=""><img  class="side-logo mb-3" data-aos="fade-right" data-aos-duration="2000" src="../assets/img/mail.png" /></a> -->
  </div>
</template>
<style scoped>
.side-logo {
	width: 30px;
	height: 30px;
}
img.side-logo:hover {
	transition: transform 0.3s;
  transform: scale(1.090);
}
#sidebar {
	top: 35%;
	z-index: 99999
}
</style>
