import '../scss/main.scss'  //pad naar het scss bestand


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Maak een Pinia instantie
const pinia = createPinia();

// Gebruik de Pinia instantie
app.use(pinia);

// Gebruik de router
app.use(router);

// Monteer de app
app.mount('#app');