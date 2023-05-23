<script setup>
import { ref } from "vue";
const props = defineProps({
  project: Array,
});
const video = ref(null);

const playVideo = () => {
  video.value.play();
};
const stopVideo = () => {
  video.value.pause();
  video.value.currentTime = 0;
};
</script>
<template>
  <div class="card border-0 p-3">
    <div class="row g-0">
      <div class="col-md-6 col-sm-12">
        <video
          ref="video"
          style="max-width: 100%; border-radius: 10px"
          :src="props.project[0].video"
          @mouseover="playVideo"
          @mouseleave="stopVideo"
          class="cursor h-100"
          muted
        />
      </div>
      <div class="col-md-1 col-sm-1"></div>
      <div class="col-md-5 col-sm-12">
        <div class="card-body p-0 ml-4">
          <h5
            class="card-title font-30 letter-space-1 font-weight-600 my-0 mb-3"
          >
            {{ props.project[0].title }}
          </h5>
          <p class="card-text text-justify line-space">
            {{ props.project[0].resume }}
          </p>
          <div class="row">
            <div class="g-col-12 p-2"></div>
          </div>
          <div class="row">
            <div class="d-flex justify-content-between">
              <p class="text-muted">
                {{ props.project[0].techno }}
              </p>
              <a :href="props.project[0].url" target="_blank" class="my-auto"
                ><button
                  class="rounded-circle border-0 p-1 bg-purple"
                  title="+ d'info sur Github"
                >
                  <img
                    class="p-1 spinning-arrow"
                    style="height: 30px"
                    src="../assets/img/github.png"
                  /></button
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  max-height: 600px;
}
</style>
