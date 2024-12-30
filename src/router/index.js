import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Price from "../views/Price.vue";
import Product from "../views/Product.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/san-pham",
      name: "product",
      component: Product,
    },
    {
      path: "/bao-gia",
      name: "price",
      component: Price,
    },
  ],
});

export default router;
