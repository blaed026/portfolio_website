<script setup>
</script>

<template>
  <div class="message">
    <h1>Message Sent</h1>
    <p>Thank you for your message, I will get back to you as soon as possible!</p>
  </div>
</template>

<style scoped>
.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  border: 1px;

  h1 {
    font-size: 50px;
    margin: 0;
    max-width: 75%;
    color: #375f8a;
  }

  p {
    font-size: 25px;
    margin: 0;
    max-width: 75%;
  }
}

@media (max-width: 800px) {
  div.message {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 15px;
    }
  }
}
</style>
