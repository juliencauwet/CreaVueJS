<script setup>
import { recipes } from '@/assets/recipes';
import RecipeView from '@/components/RecipeView.vue';
import { ref, watch } from 'vue';
defineProps(['recipes']);

const filteredRecipes = ref([]);
filteredRecipes.value = recipes;
const keyword = ref('');

watch(keyword, () => {
    const keywordInLowercase = keyword.value.toLowerCase();
    filteredRecipes.value = recipes.filter(r => {
        return r.description.includes(keywordInLowercase)
            || r.name.includes(keywordInLowercase)
            || isKeywordIncludedInIngredientsArray(keywordInLowercase, r.ingredients)
            || isKeywordIncludedInUstensilsArray(keywordInLowercase, r.ustensils)
            || r.appliance.includes(keywordInLowercase);
    })
})

const isKeywordIncludedInIngredientsArray = (word, ingredientsArray) => {
    ingredientsArray.map(elt => {
        if(elt.ingredient.includes(word)) {
            return true;
        }
    })
    return false;
}

const isKeywordIncludedInUstensilsArray = (word, ustensilsArray) => {
    ustensilsArray.map(elt => {
        if (elt.includes(word)) {
            return true;
        }
    })
    return false;
}



</script>
<template>
    <h1> Nombre de recettes correspondantes: {{ filteredRecipes.length }}</h1>
    <input class="form-control me-sm-2" type="search" placeholder="Search" v-model="keyword">
    <div class="row">
        <div class="recipe-container col-md-4" v-for="recipe in filteredRecipes">
            <RecipeView class="recipe" :recipe="recipe"></RecipeView>
        </div>
    </div>
</template>

<style scoped></style>