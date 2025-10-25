// src/main.js
import { createApp } from 'vue';
import './assets/css/main.scss'; // Changed from './style.css'
import App from './App.vue';
import router from './router'; // Import your router

createApp(App)
  .use(router) // Use the router instance
  .mount('#app');