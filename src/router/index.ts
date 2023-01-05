import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
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
    path: "/layout",
    component: () => import("@/views/Layout/index.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/Login/login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
