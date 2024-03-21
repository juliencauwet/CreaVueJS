<script setup>
import RecipeView from '@/components/RecipeView.vue';
import { ref } from 'vue';
import { useMyStore } from '../stores/myStore';
import { storeToRefs } from 'pinia';


const store = useMyStore();
const { selectedRecipes } = storeToRefs(store);


</script>
<template>
    <h1> Nombre de recettes correspondantes: {{ selectedRecipes.length }}</h1>
    <div class="row">
        <div class="recipe-container col-md-4" v-for="recipe in selectedRecipes">
            <h1> {{ recipe.id }}</h1>
            <router-link :to="`/recipes/${recipe.id}`">
            <RecipeView class="recipe" :recipe="recipe"></RecipeView>
        </router-link>
        </div>
    </div>
</template>

<style scoped></style>