<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const userId = import.meta.env.VITE_USER_ID;
const email = ref("");
const subject = ref("");
const message = ref("");
const errorMailMessage = ref("");
const errorMessage = ref("");
const emit = defineEmits('success') 

const validateEmailFormat = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    errorMailMessage.value = "Format d'adresse email invalide";
    return false;
  } else {
    errorMailMessage.value = "";
    return true;
  }
};

const submitForm = () => {
  if (!email.value || !subject.value || !message.value) {
    errorMessage.value = "Veuillez remplir tous les champs";
  } else {
    errorMessage.value = "";
    if (validateEmailFormat() === true) {
      sendEmail();
    }
  }
};

const sendEmail = async () => {
  try {
    await emailjs.sendForm(serviceId, templateId, "#form", userId, {
      subject: subject.value,
      email: email.value,
      message: message.value,
    });
    emit('success');
    setTimeout(() => {
      subject.value = "";
      email.value = "";
      message.value = "";
    }, 5000);
  } catch (error) {
    console.log({ error });
  }
};
</script>
<template>
  <div class="form-floating">
    <form class="form-group" @submit.prevent="submitForm" id="form">
      <div class="col-lg-12">
        <label for="exampleInputEmail1" class="form-label mt-2"
          >Votre adresse mail *</label
        >
      </div>
      <div class="col-lg-12">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          v-model="email"
        />
      </div>
      <small v-if="errorMailMessage" class="error-message float-end">{{
        errorMailMessage
      }}</small>
      <div class="col-lg-12">
        <label for="exampleInputEmail1" class="form-label mt-2">Sujet *</label>
      </div>
      <div class="col-lg-12">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          v-model="subject"
          name="subject"
        />
      </div>
      <div class="col-lg-12">
        <label for="floatingTextarea2" class="form-label mt-2">Message *</label>
      </div>
      <div class="col-lg-12">
        <textarea
          class="form-control"
          placeholder=""
          id="floatingTextarea2"
          style="height: 100px"
          v-model="message"
          name="message"
        ></textarea>
      </div>
      <small v-if="errorMessage" class="error-message float-end my-2">{{
        errorMessage
      }}</small>
      <div class="col-lg-12 d-flex justify-content-end mt-3">
        <button type="submit" class="contact-btn">Envoyer</button>
      </div>
    </form>
  </div>
</template>
<style>
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
