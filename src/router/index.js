import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import OverzichtView from '@/views/OverzichtView.vue';
import DetailView from '@/views/DetailView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home', // Redirect naar '/home' als het hoofdpad wordt opgevraagd
        },
        {
            path: '/home',
            component: HomeView
        },
        {
            path: '/product/:id',  // Dynamische route voor productdetails met een ID-parameter
            component: DetailView,
        },
        {
            path: '/overzicht',
            component: OverzichtView
        },
    ]
});

export default router;
