import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import OverzichtView from '@/views/OverzichtView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: HomeView
        },
        {
            path: '/product',
            component: ProductView
        },
        {
            path: '/overzicht',
            component: OverzichtView
        }
    ]
})

export default router