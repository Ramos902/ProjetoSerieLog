import { createRouter, createWebHistory } from 'vue-router';
import SerieListView from '../views/SerieListView.vue';
import SerieForm from '../components/SerieForm.vue';
import SerieCard from '../components/SerieCard.vue';
import App from '../App.vue';

const routes = [
    {
        path: '/',
        redirect: '/series'
    },
    {
        path: '/series',
        name: 'home',
        component: SerieListView,
        children: [
            {
                path: '/series/:id',
                name: 'serie-detalhe',
                component: SerieCard, props: true
            },
            {
                path: '/series/nova',
                name: 'serie-nova',
                component: SerieForm
            }
        ]
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});