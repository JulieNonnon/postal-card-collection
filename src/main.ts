import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "@/store";

//createApp(App).use(store).use(router).mount("#app"); seulement si Vuex est utilisé
createApp(App).use(router).mount("#app");
