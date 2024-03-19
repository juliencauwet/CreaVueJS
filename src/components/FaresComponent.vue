<script setup>
import FaresForm from './FaresForm.vue';
defineProps(['title']);
</script>

<template>
    <div>
        <h1> {{ title }}</h1>
        <FaresForm />
    </div>
</template>

<style scoped>
div {}

h1 {
    font-size: 50px;
    font-weight: bold;
    background: linear-gradient(rgb(15, 31, 206), rgb(11, 216, 38));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
</style>