import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';


import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css';
import '@progress/kendo-theme-default/dist/all.css';
// import './styles/app.scss';
// import './styles/style.scss';

createApp(App).use(PrimeVue).mount('#app');
