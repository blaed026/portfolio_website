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
      <h1 class="name">{{ itemData.title }}</h1>
      <img :src="`../../../src/assets/${itemData.thumbnail}`" alt="portfolio image" />
    </div>

    <div class="info">
      <h2>Created with {{ itemData.tools }}</h2>
      <p>{{ itemData.description }}</p>

      <div v-if="itemData" class="additional-images">
        <div v-for="(additionalImages, index) in itemData.additionalImages" :key="index">
          <img :src="`../../../src/assets/${additionalImages}`" alt="additionalImages" />
        </div>
      </div>
    </div>
  </div>
  <p v-else>Sorry, this ID doesnt exist!</p>

</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  .top-line {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    min-width: 0;
    max-width: 40%;
    flex: 1 1 0;

    .name {
      display: flex;
      flex-direction: column;
      color: #375f8a;
    }

    img {
      width: 100%;
      max-width: 700px;
      height: auto;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    font-size: 20px;
    flex: 1 2 0;
    min-width: 0;

    .additional-images {
      display: flex;
      gap: 20px;
      margin-top: 10px;
      justify-content: flex-start;

    }

    h1, h2 {
      color: #375f8a;
      text-align: left;
    }
    p{
      overflow-wrap: break-word;
    }
  }
  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    object-fit: cover;
  }
}
@media (max-width: 1100px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .top-line {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      max-width: 100%;

      img {
        margin: 0 auto;
        display: block;
      }

      .name {
        display: flex;
        flex-direction: column;
        color: #375f8a;
        text-align: center;
      }
    }
  }

  .info {
    text-align: center;
    margin: 0px 20px 0px 20px;

    h1,
    h2 {
      text-align: center;
    }
  }
  img {
    max-width: 450px;
    width: 150px;
    margin: 0 auto;
    display: block;
  }
  .additional-images {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
  }
}

</style>
