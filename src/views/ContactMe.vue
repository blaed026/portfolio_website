<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="container">
    <div class="image">
      <img src="../assets/placeholder-image.png" alt="placeholder for image" />
    </div>

    <div class="form-container">
      <contactForm />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 30px 0 30px;
  gap: 30px; /* space between image & form */

  img {
    min-width: 400px;
    width: 35vw;
    flex-grow: 1;

  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
  }

}

@media (max-width: 975px) {
  .container {
    display: flex;
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

</style>
