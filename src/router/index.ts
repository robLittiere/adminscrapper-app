import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VMView from "../views/VMView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Probe | home",
      component: HomeView,
    },
    {
      path: "/vm",
      name: "Probe | vm",
      component: () => import("../views/VMView.vue"),
    },
    {
      path: "/about",
      name: "Probe | about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("router.beforeEach");
  // Change title
  console.log(to);
  document.title = to.name as string;
  next();
});

export default router;
