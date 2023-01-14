import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routerGuard } from "./router-guard";
import LocalCache from "@/utils/cache";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: "/list",
    name: "List",
    component: () => import("@/views/AnyList/index.vue")
  },
  {
    path: "/layout",
    name: "Layout",
    component: () => import("@/views/Layout/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  // 当用户要跳转至登录页以外的页面需要校验是否携带token：
  if (to.path !== "/login") {
    const token = LocalCache.getCache("token");
    // 当前用户没有token时跳到登录页：
    if (!token) {
      return "/login";
    }
  }
});

export default router;
