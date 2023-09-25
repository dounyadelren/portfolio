<script setup>
const props = defineProps({
  project: Array,
});
</script>
<template>
  <div class="card border-0 p-3">
    <div class="row g-0">
      <div class="col-lg-8 col-md-12 col-sm-12">
        <div
          class="cursor is-large"
          :style="
            'background-image:url(' +
            props.project[0].image +
            ');height:100%;background-repeat:no-repeat;background-size:cover;background-position:center;'
          "
        ></div>
        <div class="is-small-screen">
          <img class="w-100" :src="props.project[0].image" />
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 ml-4">
        <div class="card-body p-0 ms-4">
          <h5
            class="card-title font-30 font-weight-600 my-0 mb-3"
          >
            {{ props.project[0].title }}
          </h5>
          <p class="card-text text-justify">
            {{ $t(props.project[0].resume) }}
          </p>
          <div class="d-flex justify-content-between">
            <p>
              <small class="text-muted">{{ props.project[0].techno }}</small>
            </p>
            <a :href="props.project[0].url" target="_blank"
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
    </div>
  </div>
</template>
