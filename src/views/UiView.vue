<script setup>
import { onMounted, reactive, toRefs } from "vue";
import UIOne from "../components/UIOne.vue";
import Feed from "../assets/img/UI/feed-component.png";
import Glass from "../assets/img/UI/glassmorphism.png";
import Screen from "../assets/img/UI/screen.png";
import MainPage from "../assets/img/UI/main-page.png";
import LoginPage from "../assets/img/UI/login-page.png";
import SignuPage from "../assets/img/UI/signupage.png";
import Loader from "../components/Loader.vue";
import { useLoaderStore } from "../store/loaderStore";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const loaderStore = useLoaderStore();
const { isLoading } = toRefs(loaderStore);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    beahvior: "smooth",
  });
};

const imageList = [Screen, MainPage, LoginPage, SignuPage];

const rocketFeed = reactive([
  {
    image: Feed,
    background: "var(--lightorange)",
    title: "Rocket Feed",
    resume: "web.rocketfeed",
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
    resume: "web.glass",
    btn: "var(--blue)",
    style: "max-height: 293px;object-position:bottom;object-fit: cover",
    url: "https://www.figma.com/file/WuIXLwDvEtS3TQwshYcmm2/Glassmorphism?node-id=0%3A1&t=V16mbvKrqdOm6whw-1",
  },
]);

onMounted(() => {
  loaderStore.setLoader();
  scrollToTop();
});
</script>
<template>
  <main>
    <Loader v-if="isLoading === true" class="col-12" />
    <div v-else class="container mx-auto row container-event">
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
        <UIOne :project="glass" />
      </div>
      <div class="col-md-12">
        <hr />
      </div>
      <div class="col-md-12">
        <div class="card border-0 p-3">
          <div class="row g-0">
            <div class="card-body p-0">
              <h5
                class="card-title font-30 letter-space-1 font-weight-600 my-0 mb-2"
              >
                Food App
              </h5>
              <div class="d-flex justify-content-between align-items-baseline">
                <p class="card-text text-justify">{{ $t("web.food") }}</p>
                <a
                  href="https://www.figma.com/file/mUkwRRX0Tevl1Yjsrzp5tl/Food-app?type=design&node-id=0%3A1&mode=design&t=ZyDf9Geotw7c9LE7-1"
                  target="_blank"
                  ><button
                    class="rounded-circle border-0 p-1 bg-blue"
                    title="Visualiser sur Figma"
                  >
                    <img
                      class="p-1 spinning-arrow"
                      style="height: 30px"
                      src="../assets/img/figma.svg"
                    /></button
                ></a>
              </div>
            </div>
          </div>
          <div class="row justify-content-around is-large">
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img :src="Screen" style="max-width: 220px" />
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img :src="LoginPage" style="max-width: 220px" />
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img :src="SignuPage" style="max-width: 220px" />
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img :src="MainPage" style="max-width: 220px" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 is-small-screen">
        <carousel :items-to-show="1">
          <slide v-for="slide in imageList" :key="slide">
            <img :src="slide" width="200" />
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="col-md-12">
        <hr />
      </div>
      <div class="col-md-12 pb-4">
        <UIOne :project="rocketFeed" />
      </div>
      <!-- <div class="row mt-2"> -->
      <div class="col-md-12 bg-purplegradient top-rounded h-100">
        <div class="row">
          <div class="col-md-6 col-sm-12 p-5">
            <img
              src="../assets/img/thumb.png"
              alt="thumb avatar"
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
              {{ $t("web.coco") }}
            </p>
            <hr />
            <div
              class="d-flex justify-content-between text-light text-justify px-1"
            >
              <p>Corentin Nordmann</p>
              <p class="text-end">{{ $t("web.fullstack") }}</p>
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
