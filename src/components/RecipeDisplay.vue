<script setup>
import RecipeView from '@/components/RecipeView.vue';
import { ref } from 'vue';
import { useMyStore } from '../stores/myStore';
import { storeToRefs } from 'pinia';


const store = useMyStore();
const keyword = ref('');
const { selectedRecipes } = storeToRefs(store);


</script>
<template>
    <h1> Nombre de recettes correspondantes: {{ selectedRecipes.length }}</h1>
    <div class="row">
        <div class="recipe-container col-md-4" v-for="recipe in selectedRecipes">
            <RecipeView class="recipe" :recipe="recipe"></RecipeView>
        </div>
    </div>
</template>

<style scoped></style>