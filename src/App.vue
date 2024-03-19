<script setup>
// import Navbar from './components/Navbar.vue';
// import ComposantdeJu from './components/ComposantdeJu.vue';
// import Popup from "@/components/Popup.vue";
// import ComponentGiovanni from './components/ComponentGiovanni.vue';
// import FaresComp from './components/FaresComponent.vue'
// import CompMohKing from './components/CompMohKing.vue';
import DropdownRecette from './components/DropdownRecette.vue';
</script>

<template>
  <Navbar></Navbar>
  <Popup nomArticle="Arnaud"></Popup>
  <ComponentGiovanni />
  <CompMohKing></CompMohKing>
  <FaresComp title="Je suis le composant de ⴼⴰⵔⴻⵙ ⴱⵓⵣⴰⵔⵉⴰ" />
  <ComposantdeJu></ComposantdeJu>

  <DropdownRecette />
</template>
<style scoped></style>
