<script setup lang="ts">
</script>

<template>
  <div class="contact-container">
    <div>
      <h1 class="headline">Lets stay in touch!</h1>
      <h3 class="text">
        Send a message here, whether you just want to say hello or would like to further discuss any
        items in my portfolio.
      </h3>
    </div>

    <form class="form">
      <div class="input">
        <label for="name">Name</label>
        <input class="box" type="text" id="name" name="name" placeholder="Name" />
      </div>
      <div class="input">
        <label for="email">Email</label>
        <input class="box" type="text" id="email" name="email" placeholder="example@email.com" />
      </div>
      <div class="input">
        <label for="subject">Subject</label>
        <textarea class="box" id="subject" name="subject" placeholder="Message"></textarea>
      </div>

      <div class="submit-button">
        <router-link :to="{ name: 'thank-you' }">Submit</router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
.headline {
  color: #375f8a;
}
.text {
  max-width: 475px;
}

div.input {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 650px;
  font-size: 18px;
  border-radius: 3px;

  input {
    background-color: white;
    font-size: 18px;
    padding: 5px 5px 5px 10px;
    border-radius: 5px;
    width: 100%;
  }

  label {
    font-weight: bold;
  }

  textarea {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: white;
    padding-left: 5px;
    font-size: 18px;
    width: 100%;
    border-radius: 5px;
  }
}
  label {
    align-self: flex-start;
    padding: 10px 0 2px 0;
    color: #375f8a;
  }

.submit-button {
  display: flex;
  margin-top: 10px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    background-color: #375f8a;
    border-radius: 12px;

    &:hover {
      color: #96b2e0;
    }
  }
}

@media (max-width: 800px) {

  div.input {
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 400px;
  }
}
</style>
