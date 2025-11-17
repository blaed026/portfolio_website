<script setup>
</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/name-draft.png" alt="Alex Blaede" />
    </div>

    <div class="links">
      <router-link :to="{ name: 'home' }">Portfolio</router-link>
      <router-link :to="{ name: 'about-me' }">About Me</router-link>
      <router-link :to="{ name: 'contact-me' }">Contact</router-link>
    </div>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  justify-content: space-between; /* pushes logo left, links right */
  align-items: center; /* vertically centers both */
  background-color: #112336;
  padding: 20px 40px;

  img {
    width: 300px;
    height: auto;
  }
}

div.links {
  display: flex;
  font-size: 25px;
  gap: 30px;

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
  div.container {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    div.links {
      flex-direction: row;
      align-items: center;
      gap: 15px;
    }
  }
}
</style>
