import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PostalCardCollection from "../views/PostalCardCollection.vue";
import PostalCardDetail from "../views/PostalCardDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/collection",
    name: "Collection",
    component: PostalCardCollection,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: PostalCardDetail,
    props: true, // permet que l'id soit automatiquement injecté dans le composant
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
