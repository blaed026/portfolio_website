<script setup>
import portfolioData from '@/data/portfolio.json'
import PortfolioHero from '@/components/icons/portfolio/PortfolioHero.vue'
</script>

<template>
  <div class="all-items">
    <portfolio-hero v-for="item in portfolioData" :key="item.id"
      :thumbnail="item.thumbnail" :title="item.title"
    />
  </div>
</template>

<style scoped>
div.all-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px dashed black;

}
</style>
