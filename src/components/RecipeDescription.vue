<script setup>
import { useRoute } from 'vue-router';
import {recipes} from '@/assets/recipes.js'

const route = useRoute();
const id = +route.params.id;

const recipe = recipes.find(r => r.id ===id)

</script>

<template>

    <h1>Description de la recette {{ id }}</h1>

    <h2> {{ recipe }}</h2>
   
</template>

<style scoped>

</style>
