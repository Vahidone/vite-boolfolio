
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Home from './pages/About.vue';



const router = createRouter({

history: createWebHistory(),


routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/chi-siamo',
    name: 'about',
    component: About
  },
 
]
});