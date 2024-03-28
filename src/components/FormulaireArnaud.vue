<script setup>

</script>

<template>
  <div class="formulaire">
    <h2>Formulaire d'inscription</h2>
    <form >
      <div class="champ">
        <label for="nom">Nom : </label>
        <input type="text" id="nom">
      </div>
      <div class="champ">
        <label for="email">Email:</label>
        <input type="email" id="email">
      </div>
      <div class="champ">
        <label for="message">Message:</label>
        <textarea id="message"></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>

</template>

<style scoped>
.formulaire {
  border: 1px solid #ddd;
  padding: 20px;
  width: 400px;
}

.champ {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px;
}

button:hover {
  background-color: #333;
}
</style>