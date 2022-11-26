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
  {
    path: "/form",
    component: () => import("@/views/Form/index.vue"),
  },
  {
    path: "/select",
    component: () => import("@/views/Select/index.vue"),
  },
  {
    path: "/control",
    component: () => import("@/views/Control/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
