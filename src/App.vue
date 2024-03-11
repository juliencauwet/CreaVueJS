   

import Navbar from './components/Navbar.vue';

import Popup from "@/components/Popup.vue";
import ComponentGiovanni from './components/ComponentGiovanni.vue';
import FaresComp from './components/FaresComponent.vue'
import ComponentGiovanni from './components/ComponentGiovanni.vue';
import CompMohKing from './components/CompMohKing.vue';
</script>

<template>
<Navbar></Navbar>
  <Popup nomArticle="Le vélo dans les alpes" contenu="Dans les alpes on pet faire du vélo car il y a pleins de chemin et c'est trop cool"></Popup>
  <ComponentGiovanni/>
   <CompMohKing></CompMohKing>
    <FaresComp title="Je suis le composant de ⴼⴰⵔⴻⵙ ⴱⵓⵣⴰⵔⵉⴰ" />
</template>

<style scoped></style>
