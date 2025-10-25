// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/dashboard.vue'; // Your existing dashboard as home
// import About from '../pages/AboutPage.vue'; // A new page example

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // You can add more routes here for new pages
  // For example:
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('../pages/ContactPage.vue'), // Lazy-loaded component
  // },
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;