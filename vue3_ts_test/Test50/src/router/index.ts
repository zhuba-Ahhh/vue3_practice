import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/T4/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "t4",
      component: Home,
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
    {
      path: "/t3",
      name: "T3",
      component: () => import("@/views/T3/index.vue"),
    },
    {
      path: "/t4",
      name: "T4",
      component: () => Home,
    },
    {
      path: "/t5",
      name: "T5",
      component: () => import("@/views/T5/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
