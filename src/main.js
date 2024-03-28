import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './stores';

const app = createApp(App);
app.use(router);
app.use(pinia);

app.directive('color', (el, binding) => {
    el.style.color = binding.value;
})
app.mount('#app');
