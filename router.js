import { createRouter, createWebHistory } from 'vue-router'

import ServiceView from './src/views/ServiceView.vue';
import ClientView from './src/views/ClientView.vue';
import NotFoundView from './src/views/NotFound404View.vue';
import HomeView from './src/views/HomeView.vue';

const routes = [
    { path: '/', component: HomeView, alias: '/home' },
    { path: '/clients', component: ClientView },
    { path: '/services', component: ServiceView },
    { path: '/:catchAll(.*)', component: NotFoundView }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;