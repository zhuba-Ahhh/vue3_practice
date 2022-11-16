import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/video/:id",
    component: () => import("@/views/Video/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
