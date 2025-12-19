<script setup>
import { useRoute } from 'vue-router'
import portfolioData from '@/data/portfolio.json'

const route = useRoute()
const itemData = portfolioData.filter(
  (portfolioItem) => portfolioItem.id === Number(route.params.portfolioId),
)[0]
</script>

<template>
  <div v-if="itemData" class="container">
    <div class="top-line">
      <h1>{{ itemData.title }}</h1>
      <img :src="`../../../src/assets/${itemData.thumbnail}`" alt="portfolio image" />
      <h2>{{ itemData.tools }}</h2>
      <p>{{ itemData.description }}</p>
    </div>
  </div>

  <p v-else>Sorry, this ID doesnt exist!</p>
</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: 30px; /* space between image & text */

  .top-line {
    display: flex;
    justify-content: space-between;
    border: 5px solid blue;
    text-align: left;
    margin-right: 30px;
  }
  h1,
  h2 {
    color: #375f8a;
    text-align: left;
  }
  img {
    min-height: 200px;
    width: 500px;
    flex-grow: 1;
  }
}
</style>
