<script setup>
import { useRoute } from 'vue-router';
import {recipes} from '@/assets/recipes.js'

const route = useRoute();
const id = +route.params.id;

const recipe = recipes.find(r => r.id ===id)

</script>

<template>

<div class="card mb-3">
    <h3 class="card-header">{{ recipe.name }}</h3>

    <img :src="`src/assets/photos_plats/${recipe.image}`" />

    <div class="card-body">
      <h4 class="card-text">{{ recipe.description }}</h4>

      <hr>

      <div class="container">
        <h5 class="card-title">Ingrédients</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="ingredient in recipe.ingredients"> {{ ingredient.ingredient }} <span
              v-if="ingredient.quantity">: {{ ingredient.quantity }} {{ ingredient.unit }}</span></li>
        </ul>
      </div>

      <hr>

      <div class="container">
        <h5 class="card-title">Appareils</h5>
        <h6 class="card-subtitle text-muted"> {{ recipe.appliance }}</h6>
      </div>

      <hr>

      <div class="container">
        <h5 class="card-title">Ustensiles</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="ustensil in recipe.ustensils"> {{ ustensil }} </li>
        </ul>
      </div>
      <a href="#" class="card-link">Card link</a>
    </div>

  </div>

    <h1>Description de la recette {{ id }}</h1>

    <h2> {{ recipe }}</h2>
    <div class="card mb-3">
    <img :src="`src/assets/photos_plats/${recipe.image}`" />
        </div>
   
</template>

<style scoped>

</style>
