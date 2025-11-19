<script setup>

</script>

<template>
  <div class="container">
    <div class="logo">
      <p>Made by Alex Blaede, 2025</p>
    </div>

    <div class="links">
      <a href="http://www.linkedin.com/in/alex-blaede"><img src="../assets/email-logo.png"</a>
      <a href="http://www.linkedin.com/in/alex-blaede"><img src="../assets/linkdin-logo.png"</a>
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
    width: 50px;
    height: auto;
  }
}

div.links {
  display: flex;
  font-size: 25px;
  gap: 30px;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 12px;

    &:hover {
      color: #96b2e0;
    }
  }
}
</style>
