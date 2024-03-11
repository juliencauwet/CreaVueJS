<script setup>
import FormulaireArnaud from './FormulaireArnaud.vue'
  defineProps(
      ['nomArticle', 'contenu']
  )
</script>

<template>
  <section class>
    <div>
      <h2 class="titre-article">{{nomArticle}}</h2>
    </div>
    <div>
      <p>{{contenu}}</p>
    </div>
    <FormulaireArnaud></FormulaireArnaud>
  </section>

</template>

<style scoped>

  .titre-article{
    text-align: center;
  }
</style>