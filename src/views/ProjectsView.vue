<script setup>
import { onMounted, reactive, toRefs } from "vue";
import CardOne from "../components/CardOne.vue";
import CardTwo from "../components/CardTwo.vue";
import PrevOn from "../assets/video/prevon.mp4";
import PrevOnPic from "../assets/img/prev_on.png";
import Camping from "../assets/video/camping.mp4";
import CampingPic from "../assets/img/camping.png";
import PinterestPic from "../assets/img/pinterest.jpg";
import Pinterest from "../assets/video/pinterest.mp4";
import Loader from "../components/Loader.vue";
import { useLoaderStore } from "../store/loaderStore";

const loaderStore = useLoaderStore();
const { isLoading } = toRefs(loaderStore)

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const prevon = reactive([
  {
    background: "var(--lightorange)",
    img: PrevOnPic,
    title: "PREVIOUSLY ON",
    resume: "web.prevon",
    techno: "React Js, BetaSeries (api)",
    btn: "var(--orange)",
    style: "",
    video: PrevOn,
    url: "https://github.com/dounyadelren/previously_on",
  },
]);

const camping = reactive([
  {
    background: "var(--lightblue)",
    img: CampingPic,
    title: "CAMPING VS WILD",
    resume:
      "Le but était de créer un RPG avec deux rôles: maître du jeu et joueur. Le maître du jeu peut créer des quêtes, des ennemis, des récompenses et des énigmes auxquels le joueur va se confronter afin de faire évoluer ses personnages.",
    techno: "Vue JS, Ruby on Rails",
    btn: "var(--blue)",
    style: "max-height: 293px;object-position:bottom;object-fit: cover",
    video: Camping,
    url: "https://github.com/dounyadelren/RPG-Game",
  },
]);

const pinterest = reactive([
  {
    background: "var(--lightpurple)",
    img: PinterestPic,
    title: "PINTEREST",
    resume:
      "Petit clône tout simple de Pinterest fait avec le framework Symfony et Boostrap en suivant partiellement un tutoriel Youtube. J'ai travaillé sur ce projet car je voulais me familiariser avec Doctrine et les migrations. Le site final est assez simple, responsive, CRUD basique. A poursuivre et à améliorer!",
    btn: "var(--purple)",
    style: "max-height: 293px;object-position:bottom;object-fit: cover",
    video: Pinterest,
    techno: "Symfony et Bootstrap",
    url: "https://github.com/dounyadelren/Pinterest---PHP-Symfony",
  },
]);

onMounted(() => {
  loaderStore.setLoader()
  scrollToTop();
});
</script>
<template>
  <main>
    <Loader v-if="isLoading === true" class="col-12" />
    <div v-else class="container mx-auto row container-event">
      <div class="col-md-12 d-flex justify-content-between align-items-end">
        <h1 class="font-weight-900">
          PROJETS <span class="text-gradient">WEBS</span>
        </h1>
        <div
          class="bg-light rounded-circle p-3 text-center cursor"
          style="width: 56px"
        >
          <a
            href="https://github.com/dounyadelren"
            target="_blank"
            title="Voir mon github"
            >+</a
          >
        </div>
      </div>
      <div class="col-md-12">
        <hr />
      </div>
      <div class="col-md-12 p-0">
        <CardOne :project="prevon" />
      </div>
      <div class="col-md-6 col-sm-12">
        <CardTwo :project="camping" />
      </div>
      <div class="col-md-6 col-sm-12">
        <CardTwo :project="pinterest" />
      </div>
      <div class="mt-2 ps-sm-0 mx-sm-0">
        <div class="col-md-12 bg-purplegradient top-rounded h-100">
          <div class="row">
            <div class="col-md-6 col-sm-12 p-5">
              <img
                src="../assets/img/fist.png"
                alt="fist avatar"
                class="avatar"
              />
            </div>
            <div class="col-md-6 col-sm-12 d-flex flex-column text-white my-3">
              <img
                width="90"
                class="quotes"
                src="../assets/img/quotes.svg"
                alt="quotes"
              />
              <p class="font-light citation">
                {{ $t('web.nicolas') }}
              </p>
              <hr />
              <div
                class="d-flex justify-content-between text-light text-justify px-2"
              >
                <p>Nicolas Muhadri</p>
                <p class="text-end">CEO & {{ $t('web.founder') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.container-event {
  margin-top: -200px;
}
@media (max-width: 990px) {
  .container-event {
    margin-top: 20px;
  }
}
</style>
