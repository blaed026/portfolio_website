<script setup>
import portfolioData from '@/data/portfolio.json'
import PortfolioHero from '@/components/icons/portfolio/PortfolioHero.vue'
//import HeroContainer from '@/components/icons/portfolio/HeroContainer.vue'
</script>

<template>
  <div class="all-items">
    <router-link
      :to="{ name: 'PortfolioItemDetails', params: { portfolioId: item.id } }"
      v-for="item in portfolioData"
      :key="item.id"
    >
      <portfolio-hero :thumbnail="item.thumbnail" :title="item.title" :id="item.id" />
    </router-link>
  </div>
</template>

<style scoped>
div.all-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;

  a {
    display: flex;
    flex-grow: 1;
    cursor: pointer !important;
    text-decoration: none;
  }
}
</style>
