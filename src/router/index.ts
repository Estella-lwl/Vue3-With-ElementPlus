import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Layout"
  },
  {
    path: "/home",
    // name: "list",
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: "/list",
    // name: "list",
    component: () => import("@/views/AnyList/index.vue")
  },
  {
    path: "/Layout",
    component: () => import("@/views/Layout/index.vue")
  },
  {
    path: "/Login",
    component: () => import("@/views/Login/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
