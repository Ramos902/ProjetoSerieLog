import { createRouter, createWebHistory } from 'vue-router';
import SerieListView from '../views/SerieListView.vue';
import SerieForm from '../components/SerieForm.vue';
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
        component: SerieForm
    },
    {
        path: '/series/:id',
        name: 'serie-detalhe',
        component: SerieForm, props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});