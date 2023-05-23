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
  <div class="card border-0">
    <div class="row g-0">
      <div class="col-md-12">
        <video
          ref="video"
          :src="props.project[0].video"
          @mouseleave="stopVideo"
          @mouseover="playVideo"
          class="cursor h-100 is-large"
          style="max-width: 100%; border-radius: 10px"
          muted
        />
        <img :src="props.project[0].img" class="is-small-screen" style="max-width: 100%; border-radius: 10px" />
      </div>
      <div class="col-md-12">
        <div class="card-body p-0">
          <div class="d-flex justify-content-between my-3">
            <h5 class="card-title font-30 letter-space-1 font-weight-600">
              {{ props.project[0].title }}
            </h5>
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
</template>
<style scoped>
.card {
  max-height: 600px;
}
</style>
