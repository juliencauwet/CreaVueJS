<script setup>
import Navbar from '@/components/Navbar.vue';
import { recipes } from '@/assets/recipes';
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


allIngredients.value = [...new Set(allIngredients.value)]
allUstensils.value = [...new Set(allUstensils.value)]
allAppliances.value = [...new Set(allAppliances.value)]
allIngredients.value.sort();
allUstensils.value.sort();
allAppliances.value.sort();

</script>

<template>
  <Navbar :appliances="allAppliances" :ingredients="allIngredients" :ustensils="allUstensils"></Navbar>
  <router-view></router-view>
  
</template>
<style scoped></style>
