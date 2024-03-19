<script setup>
import { recipes } from '../recipes.js';
import { computed, ref } from 'vue';
import RecetteCards from './RecetteCards.vue';

const recipesData = recipes;
const recipesDataAppliance = recipesData.map(recipe => recipe.appliance);
const uniqueAppliances = [...new Set(recipesDataAppliance)];
let applianceSelectionnee = ref('');



const recipeFiltred = computed(() => {
    if (applianceSelectionnee.value) {
        return recipesData.filter(r => r.appliance === applianceSelectionnee.value)
    } else {
        console.log("Aucune recettes");
        return [];
    }
})

</script>

<template>
    <div class="dropdown">
        <select v-model="applianceSelectionnee">
            <option disabled value="">Sélectionnez une appliance</option>
            <option v-for="r in uniqueAppliances" :value="r">{{ r }}</option>
        </select>
    </div>
    <div v-if="recipeFiltred.length > 0">
        <RecetteCards :recipesData="recipeFiltred" />
    </div>
</template>

<style scoped></style>