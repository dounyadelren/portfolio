<script setup>
import { onMounted, reactive } from "vue";
import UIOne from "../components/UIOne.vue";
import UITwo from "../components/UITwo.vue";
import Feed from "../assets/img/UI/feed-component.svg";
import Glass from "../assets/img/UI/glassmorphism.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    beahvior: "smooth",
  });
};

const rocketFeed = reactive([
  {
    image: Feed,
    background: "var(--lightorange)",
    title: "Rocket Feed",
    resume:
      "Ce projet est un effort de groupe et aussi une de mes plus grandes fiertés. C'est un agrégateur de news sans redirection vers la source de l'information. Tout y est paramétrable, l'utilisateur peut contrôler le type d'information qu'il voit ainsi que la source. Le plus intéréssant a été l'intégration des réseaux sociaux dans le feed comme Youtube ou Twitter. Sur ce projet je suis l'auteur de la charte graphique ainsi que de l'UX entière. Je l'ai présenté avec un groupe de 5 développeurs en tant que projet de fin d'année.",
    btn: "var(--orange)",
    style: "",
    url: "https://www.figma.com/file/B81ZnEXPEF6bPfe2jWQWpX/mockup-%F0%9F%94%AD%F0%9F%96%8C?node-id=105%3A444&t=eB7UQnCVZfZpJp4v-1",
  },
]);

const glass = reactive([
  {
    image: Glass,
    background: "var(--lightblue)",
    title: "Glassmorphisme",
    resume:
      "J'ai créé cette landing page en suivant un tutoriel sur Youtube sur le glassmorphisme. C'est un style que j'affectionne particulièrement car beaucoup utilisé notamment chez Apple",
    btn: "var(--blue)",
    style: "max-height: 293px;object-position:bottom;object-fit: cover",
    url: "https://www.figma.com/file/WuIXLwDvEtS3TQwshYcmm2/Glassmorphism?node-id=0%3A1&t=V16mbvKrqdOm6whw-1",
  },
]);

onMounted(() => {
  scrollToTop();
});
</script>
<template>
  <main class="container mx-auto row container-event">
    <Loader />
    <div class="col-md-12 d-flex justify-content-between align-items-end">
      <h1 class="font-weight-900">
        CONCEPTIONS <span class="text-gradient">UI</span>
      </h1>
      <div
        class="bg-light rounded-circle p-3 text-center cursor"
        style="width: 56px"
      >
        <a
          href="https://teal-tank-ee6.notion.site/Dounya-Derlen-5d813142438f4dbd835380c229432286"
          class="link"
          target="_blank"
          title="Voir ma page Notion"
          >+</a
        >
      </div>
    </div>
    <div class="col-md-12">
      <hr />
    </div>
    <div class="col-md-12">
      <UIOne :project="rocketFeed" />
    </div>
    <div class="col-md-12">
      <UITwo :project="glass" />
    </div>
    <!-- <div class="row mt-2"> -->
    <div class="col-md-12 bg-purplegradient top-rounded h-100">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <img
            src="../assets/img/thumb.png"
            alt="thumb avatar"
            class="avatar"
          />
        </div>
        <div class="col-md-6 col-sm-12 d-flex flex-column text-white my-3">
          <img
            width="90px"
            class="quotes"
            src="../assets/img/quotes.svg"
            alt="quotes"
          />
          <p class="font-light citation">
            Immensément créative et jamais à court d'idées
          </p>
          <hr />
          <div class="d-flex justify-content-between text-light text-justify px-1">
            <p>Corentin Nordmann</p>
            <p class="text-end">Développeur web full-stack</p>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </main>
</template>
<style scoped>
.container-event {
  margin-top: -100px;
}
@media (max-width: 990px) {
  .container-event {
    margin-top: 20px;
  }
}
</style>
