<script setup>
</script>

<template>
    <div class="form-container">
        <form class="custom-form">
            <h2>Mon formulaire</h2>
            <div class="form-group">
                <label for="name">Nom:</label>
                <input type="text" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message"></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </div>
</template>

<style scoped>
.form-container {
    display: flex;
}

.custom-form {
    border: 6px solid;
    border-image-slice: 1;
    border-width: 6px;
    border-image-source: linear-gradient(to right, blue, green);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    background: linear-gradient(to right, blue, green);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: linear-gradient(to right, darkblue, darkgreen);
}
</style>
