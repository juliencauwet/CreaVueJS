<script setup>
import Navbar from '@/components/Navbar.vue';
import { recipes } from '@/assets/recipes';
import RecipeDisplay from './components/RecipeDisplay.vue';
import { ref } from 'vue';

const allIngredients = ref([]);
const allUstensils = ref([]);

recipes.map( r=> {
  r.ingredients.map(i => {
    allIngredients.value.push(i.ingredient);
  });
  r.ustensils.map(u => {
    allUstensils.value.push(u);
  })
})

console.log('avant');
console.log('longueur de allIngredients', allIngredients.value.length);
console.log('longueur de allUstensils', allUstensils.value.length);


allIngredients.value = [...new Set(allIngredients.value)]
allUstensils.value = [...new Set(allUstensils.value)]

console.log('après');
console.log('longueur de allIngredients', allIngredients.value.length);
console.log('longueur de allUstensils', allUstensils.value.length);


</script>

<template>
  <Navbar></Navbar>
 
  <RecipeDisplay :recipes="recipes"></RecipeDisplay>
  
  
</template>
<style scoped></style>
