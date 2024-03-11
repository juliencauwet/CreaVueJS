<script setup>
import Navbar from './components/Navbar.vue';
import Popup from "@/components/Popup.vue";
import ComponentGiovanni from './components/ComponentGiovanni.vue';
</script>

<template>
<Navbar></Navbar>
  <Popup nomArticle="Le vélo dans les alpes" contenu="Dans les alpes on pet faire du vélo car il y a pleins de chemin et c'est trop cool"></Popup>
  <ComponentGiovanni/>
</template>

<style scoped>

</style>
