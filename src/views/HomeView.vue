<script setup>
import { ref } from "vue";
import CV from "../assets/CV-DOUNYADERLEN-ECV.pdf";
import Tech from "../components/Figma.vue";
import Contact from "../components/Contact.vue";

const successMessage = ref("");

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const handleSuccess = () => {
  scrollToTop();
  successMessage.value = "Le mail a été envoyé avec succès";
  setTimeout(() => {
    successMessage.value = "";
  }, 5000);
};
</script>

<template>
  <main>
    <div
      v-if="successMessage"
      class="alert alert-success text-center d-flex justify-content-center"
    >
      <p class="m-0">{{ successMessage }}</p>
      <img
        src="../assets/img/check.png"
        width="25"
        height="25"
        class="ms-3"
        alt="check"
      />
    </div>
    <div class="container mx-auto container-event">
      <div class="row">
        <div class="col-12" style="max-height: 359px">
          <h2 class="font-weight-300 font-25 mb-2 text-dark dancing-script">
            {{ $t('messages.greetings') }},
          </h2>
          <h1
            class="font-weight-900 letter-space-0 mb-2 text-dark text-uppercase"
          >
            <p>
              {{$t('messages.dev')}}<span class="text-gradient"
                ><strong> front-end</strong></span
              >
            </p>
            <p>
              <span class="text-gradient"><strong>UX/UI</strong></span>
              designer
            </p>
          </h1>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-around">
        <div class="col-md-3 offset-md-1 col-sm-3 col-xs-12 text-center">
          <a :href="CV" target="_blank" class="text-purple link"
            ><u>{{$t('messages.resume')}} 🔥</u></a
          >
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12 mx-auto">
          <Tech />
        </div>
        <div
          class="col-md-3 align-items-baseline d-flex col-sm-3 col-xs-12 justify-content-center"
        >
          <img src="../assets/img/pin.png" id="pin" />
          <p>Paris</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="bg-blob"></div>
        </div>
      </div>
      <!-- <div class="row mt-2 custom-bg">
        <div class="col-lg-6 col-md-6 col-sm-12 my-auto">
          <h1
            class="font-weight-900 letter-space-0 mb-2 text-gradient text-uppercase"
          >
            Me contacter
          </h1>
        </div>
        <div class="col-sm-6 col-md-6 col-sm-12">
          <Contact id="contact" @success="handleSuccess" />
        </div>
      </div> -->
    </div>
  </main>
</template>
<style scoped>
hr {
  border-top-color: #8d8f90;
  border-width: 1px;
}
.container-event {
  margin-top: -200px;
}

.alert {
  position: absolute;
  top: 0;
  max-width: 50%;
  width: 50%;
  transform: translate(49%, 1%);
  left: 0;
}

.custom-bg {
  width: auto;
  background: black;
  color: white;
  border-top-left-radius: 20px;
  padding: 2rem;
  border-top-right-radius: 20px;
}

@media (max-width: 990px) {
  .container-event {
    margin-top: 20px;
  }
}

@media (max-width: 542px) {
  .bg-blob {
    background-size: cover;
  }
}
</style>
