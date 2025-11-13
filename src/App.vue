<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav-bar />
    </header>

    <section class="content">
      <router-view />
    </section>

    <footer>made by alex</footer>
  </section>
</template>

<style scoped>
body {
  section.container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > * {
      border: 1px solid black;
    }
  }

  .content {
    background-color:  #fff;
    color: black;
    padding: 10px;
    border-radius: 10px;

    p {
      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-top: 0;
      }
    }
  }

  footer {
    text-align: center;
    padding: 10px;
    background-color: #fff;
  }
}
</style>
