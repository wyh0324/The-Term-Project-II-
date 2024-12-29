import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CountryPage from '../pages/CountryPage.vue';
import AdminPage from '../pages/AdminPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/country/:id', component: CountryPage },
  { path: '/admin', component: AdminPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
