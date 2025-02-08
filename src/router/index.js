import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PageIndex from "../views/PageIndex.vue";
import PageShow from "../views/PageShow.vue";
import MediaIndex from "../views/MediaIndex.vue";
import TeamIndex from "@/views/TeamIndex.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/pages", component: PageIndex },
  { path: "/pages/:slug", component: PageShow },
  { path: "/media", component: MediaIndex },
  { path: "/teams", component: TeamIndex },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
