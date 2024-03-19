<script setup>
defineProps(['recipesData'])
</script>

<template>
    <div>
        <div class="card" v-for="r in recipesData">
            <img>
            <h1>{{ r.name }} | Time : {{ r.time }} min</h1>
            <h3>Servings : {{ r.servings }}</h3> <br>
            <h3 class="des">Description :</h3>
            <p>{{ r.description }}</p> <br>
            <h2 class="ingredient">Ingredients :</h2>
            <ul>
                <li v-for="i in r.ingredients">
                    {{ i.ingredient }}
                </li>
            </ul> <br>
            <h3 class="desc">Appliance :</h3>
            <p>{{ r.appliance }}</p> <br>

            <h3 class="des">Ustensils :</h3>
            <ul v-for="u in r.ustensils">
                <li>{{ u }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.card {
    margin: 40px;
    padding: 25px;
    border: 2px solid #fff;
    border-radius: 25px;
}

h1,
h2,
h3 {
    font-weight: bold;
}

.desc-ingr {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
