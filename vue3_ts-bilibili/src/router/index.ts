import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/video/:id",
    component: () => import("@/views/Video/index.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/search",
    component: () => import("@/views/Search/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
