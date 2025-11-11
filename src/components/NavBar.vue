<script setup>
</script>

<template>
  <div class="container">
    <div class="logo"></div>

    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about-me' }">About Me</router-link>
      <router-link :to="{ name: 'contact-me' }">Contact Me</router-link>
    </div>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: #112336;
  padding-top: 30px;

  div.logo {
    height: 200px;
    width: 200px;
    background-color: #375f8a;
    border-radius: 100px;
  }

  div.links {
    display: flex;
    font-size: 25px;
    gap: 30px;
    align-content: center;
    padding: 0 0 30px 0;


    a {
      color: #fff;
      text-decoration: none;
      padding: 10px;
      background-color: #375f8a;
      border-radius: 12px;

      &:hover {
        //background-color: white;
        color: #96b2e0;
      }

      @media (width > 600px) {
        /*overrides flex-direction column on div.links*/
        flex-direction: row;
      }
    }
  }
}
</style>
