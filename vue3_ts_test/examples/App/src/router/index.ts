import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("@/views/CounterView.vue"),
    },
    {
      path: "/temperature",
      name: "temperature",
      component: () => import("@/views/Temperature.vue"),
    },
  ],
});

export default router;