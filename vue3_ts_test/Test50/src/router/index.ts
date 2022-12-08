import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/T1/index.vue"),
    },
    {
      path: "/t1",
      name: "T1",
      component: () => import("@/views/T1/index.vue"),
    },
    {
      path: "/t2",
      name: "T2",
      component: () => import("@/views/T2/index.vue"),
    },
  ],
});

export default router;
