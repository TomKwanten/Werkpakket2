<script>
export default {
    data(){
        return {
            header: {
                titel: "RaveWear"
            },                 
        }
    }
}
</script>
<template>
    <header>
        <h1>{{ header.titel }}</h1>
        <nav class="nav">
        <ul>
            <li><button><router-link to="/home">Startpagina</router-link></button></li>
            <li><button><router-link to="/overzicht">In de aanbieding</router-link></button></li>
            <li><button><router-link to="/login">Inloggen</router-link></button></li>
        </ul>
        </nav>
    </header>
</template>
<style></style>