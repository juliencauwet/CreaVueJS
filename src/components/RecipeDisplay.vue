<script setup>
import { recipes } from '@/assets/recipes';
import RecipeView from '@/components/RecipeView.vue';
import { ref, watch } from 'vue';
defineProps(['recipes']);

const filteredRecipes = ref([]);
filteredRecipes.value = recipes;
const keyword = ref('');

watch(keyword, () => {
    filteredRecipes.value = recipes.filter(r => {
        return r.description.includes(keyword.value.toLowerCase());
    })
})



</script>
<template>
    <h1>{{ keyword }}</h1>

    <input class="form-control me-sm-2" type="search" placeholder="Search" v-model="keyword">
    <div class="row">
        <div class="recipe-container col-md-4" v-for="recipe in filteredRecipes">
            <RecipeView class="recipe"  :recipe="recipe"></RecipeView>
        </div>
    </div>
</template>

<style scoped>

</style>