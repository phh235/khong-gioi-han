import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Price from "../views/Price.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/bao-gia",
      name: "price",
      component: Price,
    },
  ],
});

export default router;
