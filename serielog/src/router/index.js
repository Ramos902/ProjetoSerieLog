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
                path: 'nova',
                name: 'serie-nova',
                component: SerieForm
            },
            {
                path: ':id',
                name: 'serie-detalhe',
                component: SerieCard, props: true
            }
        ]
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});