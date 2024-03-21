import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import RecipeDisplay from '@/components/RecipeDisplay.vue'
import RecipeDescription from '@/components/RecipeDescription.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/recipes', name: 'Recipes', component: RecipeDisplay},
  { path: '/recipes/:id', component: RecipeDescription },
]

// Créez l'instance du router
const router = createRouter({
  history: createWebHistory(),
  routes, // raccourci pour `routes: routes`
})

export default router
