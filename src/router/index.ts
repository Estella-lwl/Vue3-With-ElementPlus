import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routerGuard } from "./router-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: () => import("@/views/Home/index.vue")
  // },
  // {
  //   path: "/list",
  //   name: "List",
  //   component: () => import("@/views/AnyList/index.vue")
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/login.vue")
  },
  // {
  //   path: "/layout",
  //   name: "Layout",
  //   component: () => import("@/views/Layout/index.vue")
  //   // children: [] //👉🏻这里应该是根据用户菜单动态决定，所以：
  // },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/main/main.vue")
    // children: [] //👉🏻这里应该是根据用户菜单动态决定，所以：
  },

  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/common/404.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

routerGuard(router);

export default router;
