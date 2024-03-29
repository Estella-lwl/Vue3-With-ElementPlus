import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routerGuard } from "./router-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/login.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/main/main.vue")
    // children: [] // 这里应该是根据用户菜单动态决定。（当要跳到首页时先做映射 或 在导航守卫中）
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
