import { createRouter, createWebHistory } from 'vue-router';
import SerieListView from '../views/SerieListView.vue';
import SerieFormView from '../views/SerieFormView.vue';
import App from '../App.vue';

const routes = [
    {
        path: '/',
        redirect: '/series'
    },
    {
        path: '/series', 
        name: 'home',
        component: SerieListView
    },
    {
        path: '/series/nova',
        name: 'serie-nova',
        component: SerieFormView
    },
    {
        path: '/series/:id',
        name: 'serie-detalhe',
        component: SerieFormView, props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});