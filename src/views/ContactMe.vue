<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
    <div class="form-container">
      <contact-form />
    </div>
</template>

<style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 0;
  }
  @media (max-width: 800px) {
    .form-container {
      padding: 0px 30px 0px 30px;
    }

  }
</style>
