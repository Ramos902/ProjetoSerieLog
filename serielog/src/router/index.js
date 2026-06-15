import { createRouter, createWebHistory } from 'vue-router';
import SerieListView from '../views/SerieListView.vue';
import SerieFormView from '../views/SerieFormView.vue';

const routes = [
  { path: '/', name: 'home', component: SerieListView },
  { path: '/series/nova', name: 'serie-nova', component: SerieFormView },
  { path: '/series/:id', name: 'serie-detalhe', component: SerieFormView, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});