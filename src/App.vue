<script setup>
import Navbar from '@/components/Navbar.vue';
import { recipes } from '@/assets/recipes';
import RecipeDisplay from './components/RecipeDisplay.vue';
import { ref } from 'vue';

const allIngredients = ref([]);
const allUstensils = ref([]);
const allAppliances = ref([]);

recipes.map( r=> {
  r.ingredients.map(i => {
    allIngredients.value.push(i.ingredient);
  });
  r.ustensils.map(u => {
    allUstensils.value.push(u);
  })
  allAppliances.value.push(r.appliance);
})

console.log('avant');
console.log('longueur de allIngredients', allIngredients.value.length);
console.log('longueur de allUstensils', allUstensils.value.length);
console.log('longueur de allAppliances', allAppliances.value.length);


allIngredients.value = [...new Set(allIngredients.value)]
allUstensils.value = [...new Set(allUstensils.value)]
allAppliances.value = [...new Set(allAppliances.value)]


console.log('après');
console.log('longueur de allIngredients', allIngredients.value.length);
console.log('longueur de allUstensils', allUstensils.value.length);
console.log('longueur de allAppliances', allAppliances.value.length);


</script>

<template>
  <Navbar :appliances="allAppliances"></Navbar>
  <RecipeDisplay :recipes="recipes"></RecipeDisplay>
  
  
</template>
<style scoped></style>
