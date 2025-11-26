import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import AboutMe from '@/views/AboutMe.vue'
import ContactMe from '@/views/ContactMe.vue'
import AllItems from '@/views/AllItems.vue';
import PortfolioItemDetails from '@/views/PortfolioItemDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage,
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: AboutMe,
  },
  {
    path: '/contact-me',
    name: 'contact-me',
    component: ContactMe,
  },
  {
    path: '/examples/portfolio',
    children: [
      {
        path: '',
        name: 'PortfolioLandingPage',
        component: AllItems,
      },
      {
        path: ':portfolioId',
        name: 'PortfolioItemDetails',
        component: PortfolioItemDetails,
      },
    ],
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
