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
      component: () => import("@/views/TemperatureView.vue"),
    },
    {
      path: "/book",
      name: "book",
      component: () => import("@/views/BookView.vue"),
    },
    {
      path: "/time",
      name: "time",
      component: () => import("@/views/TimeView.vue"),
    },
    {
      path: "/curd",
      name: "curd",
      component: () => import("@/views/CURDView.vue"),
    },
    {
      path: "/markdown",
      name: "markdown",
      component: () => import("@/views/markdownView.vue"),
    },
    {
      path: "/github",
      name: "github",
      component: () => import("@/views/GitHubView.vue"),
    },
    {
      path: "/base",
      name: "base",
      component: () => import("@/views/BaseView.vue"),
    },
  ],
});

export default router;
