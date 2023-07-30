import { Router } from "vue-router";
import LocalCache from "@/utils/cache";
// import { firstMenu } from "@/utils/mapMenus";

export function routerGuard(router: Router) {
  router.beforeEach((to) => {
    // 当用户要跳转至登录页以外的页面需要校验是否携带token：
    if (to.path !== "/login") {
      const token = LocalCache.getCache("token");
      // 当前用户没有token时跳到登录页：
      if (!token) {
        return "/login";
      }
    }

    // 也可以在此处映射二级菜单的路由
  });
}
