<script setup>
defineProps(['appliances'])
import { ref } from 'vue';


const selectedAppliance = ref('');


</script>
<template>


  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
    <div class="container-fluid">

      <div class="collapse navbar-collapse" id="navbarColor01">

        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>

        <form class="filter">
          <div class="filter-element">
            <label for="keyword">Mot clé</label>
            <input id="keyword" class="form-control" type="search">
          </div>
          <div class="filter-element">
            <label for="appliance">Appareil</label>
            <select class="form-select " id="appliance" v-model="selectedAppliance">
              <option selected disabled>Sélectionner un appareil</option>
              <option v-for="appliance in appliances" :value="appliance"> {{ appliance }}</option>
            </select>
          </div>          
        </form>
      </div>
    </div>
  </nav>

</template>

<style scoped>
* {
  font-size: large;
  color: black;
}

.filter {
  display: flex;
}

.filter-element {
  margin: 10px;
}

li {
  margin: 1em;
}
</style>
