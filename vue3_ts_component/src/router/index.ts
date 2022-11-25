import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/button",
    component: () => import("@/views/Button/index.vue"),
  },
  {
    path: "/table",
    component: () => import("@/views/Table/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
