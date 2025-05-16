import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './base.css'; //css global
//import { store } from "@/store";

import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');

//createApp(App).use(store).use(router).mount("#app"); seulement si Vuex est utilisé
//createApp(App).use(router).mount("#app");

app.use(pinia);
app.use(router);
app.mount("#app");