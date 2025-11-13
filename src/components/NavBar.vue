<script setup>
</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/name-draft.png" alt="Alex Blaede"/>
    </div>

    <div class="links">
      <router-link :to="{ name: 'home' }">Portfolio</router-link>
      <router-link :to="{ name: 'about-me' }">About</router-link>
      <router-link :to="{ name: 'contact-me' }">Contact</router-link>
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
  padding-top: 20px;

    img {
      padding-top: 10px;
      width: 350px; /* adjust this */
      height: auto; /* keeps proportions */
    }

  div.links {
    display: flex;
    font-size: 25px;
    gap: 30px;
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
