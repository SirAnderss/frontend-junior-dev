import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/some',
    name: 'Some',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/another',
    name: 'Another',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
