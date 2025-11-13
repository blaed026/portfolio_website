<script setup >
import PortfolioHero from './PortfolioHero.vue'
import portfolioData from '@/data/portfolio.json'
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  isResponsive: {
    type: Boolean,
    required: true
  }
})
</script>

<template>

  <portfolio-hero v-for="item in portfolioData" :key="item.id"
                  :thumbnail="item.thumbnail" :title="item.title"/>
</template>

<style scoped></style>
