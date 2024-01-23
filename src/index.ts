import { createApp } from 'vue';
import store from '@/store'
import App from '@/App.vue';
import { router } from '@/router';
import '@/assets/styles/scss/base.scss'
import '@/global.css';

const app = createApp(App);


app.use(store);
app.use(router);
app.mount('#root');