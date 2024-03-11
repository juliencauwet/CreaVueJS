<script setup>
  defineProps(
      ['nomArticle'],
      ['contenu']
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
  </section>

</template>

<style scoped>

  .titre-article{
    text-align: center;
  }
</style>