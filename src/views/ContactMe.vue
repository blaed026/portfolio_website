<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="container">
    <div class="image">
      <img src="../assets/placeholder-image.png" alt="placeholder for image" />
    </div>
    <contactForm />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: 30px; /* space between image & text */

  .text {
    text-align: left;
    margin-right: 30px;
  }
  img {
    min-height: 200px;
    width: 450px;
    flex-grow: 1;
  }
  .form {

  }
}
@media (max-width: 1000px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
img {
  display: flex;
  justify-content: center;
  min-height: 150px;
}

.text {
  text-align: center;
  margin: 0px 20px 0px 20px;
}
</style>
