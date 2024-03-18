<script setup>
defineProps(['appliances', 'ingredients', 'ustensils'])
import { ref, computed } from 'vue';
import { useMyStore } from '../stores/myStore';

const store = useMyStore();

const keyword = ref('');
const selectedAppliance = ref('');
const selectedIngredients = ref([]);
const selectedUstensils = ref([]);

const filterRecipes = () => {
      store.filterRecipes(keyword.value, selectedIngredients.value, selectedAppliance.value, selectedUstensils.value)
}

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="light">

    <div class="container-fluid">

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/recipes">Recipes</router-link>
          </li>
        </ul>
        <form class="filter">
          <div class="filter-element">
            <label for="keyword">Mot clé</label>
            <input id="keyword" class="form-control" type="search" v-model="keyword">
          </div>
          <div class="filter-element">
            <label for="appliance">Appareil</label>
            <select class="form-select " id="appliance" v-model="selectedAppliance">
              <option v-for="appliance in appliances" :value="appliance"> {{ appliance }}</option>
            </select>
          </div>
          <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="ingredientsButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Ingredients
          </button>
          <ul class="dropdown-menu" aria-labelledby="ingredientsButton1">
            <li class="form-check " v-for="ingredient in ingredients" :key="ingredient">
              <input v-model="selectedIngredients" class="form-check-input" type="checkbox" :value="ingredient"
                :id="ingredient">
              <label class="form-check-label" :for="ingredient">
                {{ ingredient }}
              </label>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="ustensilsButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Ustensils
          </button>
          <ul class="dropdown-menu" aria-labelledby="ustensilsButton1">
            <li class="form-check " v-for="ustensil in ustensils" :key="ustensil">
              <input v-model="selectedUstensils" class="form-check-input" type="checkbox" :value="ustensil"
                :id="ustensil">
              <label class="form-check-label" :for="ustensil">
                {{ ustensil }}
              </label>
            </li>
          </ul>
        </div>
        <button class="form-control" type="submit" @click.prevent="filterRecipes"> Filtrer </button>

        </form>

        


      </div>
    </div>
  </nav>

</template>

<style scoped>
.filter {
  display: flex;
  align-items: flex-start;
  padding: 20px;
}

* {
  font-size: large;
  color: black;
}



.filter-element,
.dropdown,
.nav-item {
  margin: 10px;
}
</style>
