import { RouteRecordRaw } from "vue-router";

const allRoutes: RouteRecordRaw[] = [];
const routes: RouteRecordRaw[] = [];
let firstMenu: any = null;

/**
 * 动态生成路由
 * @param userMenu
 * @returns
 */
export function mapMenu(userMenu: any[]): RouteRecordRaw[] {
  // S1. 默认先加载所有的routes：
  // webpack中的函数：参数1.传入一个文件夹的路径；参数2.是否递归查找(有文件夹嵌套时)；参数3.正则匹配所有main中ts文件：
  const routeFiles = require.context("../router/main", true, /\.ts/);

  // webpack 中拿到所有文件：keys()
  routeFiles.keys().forEach((key) => {
    console.log("当前path", key);
    // S2.根据菜单获取需要添加的routes：
    const route = require("../router/main" + key.split(".")[1]); //得到文件完整路径
    allRoutes.push(route.default); //取出每个模块中的default（url）得到所有路由
  });

  routerGenerator(userMenu); //根据以上生成好的所有菜单，添加对应映射到routes数组中

  console.log("routes", routes);
  return routes;
}

/**
 * 递归菜单生成路由
 * @param menus
 */
export function routerGenerator(menus: any[]) {
  // 遍历菜单层级下的每一项：
  for (const menu of menus) {
    // type=2：处于第2层级：
    if (menu.type === 2) {
      // 当处于第2层级，在allRoutes中拿到当前匹配的route：
      const currentRoute = allRoutes.find((route) => {
        // 当route.path=menu.url就代表找到了当前route：
        return route.path === menu.url;
      });
      // 当找到👆🏻时将它放进routes数组：
      if (currentRoute) {
        routes.push(currentRoute);
      }

      // 当firstMenu无值 =》赋值为第一个找到的菜单
      if (!firstMenu) {
        firstMenu = menu;
      }
    } else {
      // 当处于第1层级，递归children：
      routerGenerator(menu.children);
    }
    /* 经过以上递归后，会将所有匹配到的path对应的路由添加到routes中。 */
  }
}

/**
 *
 * @param userMenu 用户菜单
 * @param currentPath 当前路径
 * @returns 各层级路由对象组成的面包屑数组
 */
export function mapPathToBreadcrumb(userMenu: any[], currentPath: string) {
  const breadCrumbs: any = [];
  mapPathToMenu(userMenu, currentPath, breadCrumbs);
  return breadCrumbs;
}

/**
 * 根据路径找到所在的路由对象
 * @param userMenu 当前用户完整的菜单
 * @param currentPath 当前页面的路径
 * @returns menu 当前页面的路由对象
 */
export function mapPathToMenu(
  userMenu: any[],
  currentPath: string,
  breadCrumbs?: any[]
): any {
  // 从userMenu中查找符合的路径：
  for (const menu of userMenu) {
    if (menu.type === 1) {
      // menu.children.forEach((item: any) => {
      //   return item.url === currentPath;
      // });
      const resultMenu = mapPathToMenu(menu.children ?? [], currentPath);
      if (resultMenu) {
        const outerPath = currentPath.split("/").slice(0, 3).join("/");
        const outerMenu = (menu.url = outerPath ? menu : {});
        breadCrumbs?.push(outerMenu);
        breadCrumbs?.push(resultMenu);
        return resultMenu;
      }
      // TODO: 这里未考虑到 type=1 且没有children的情况
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu; //递归的最后是返回这个menu对象
    }
  }
}

/**
 *
 * @param userMenus 当前用户菜单
 * @returns 当前用户按钮权限
 */
export function mapButtonPermission(userMenus: any[]) {
  const permissions: string[] = [];
  // 递归查找出三级菜单
  const _recursePermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recursePermission(menu.children ?? []); //当为空数组时那一层就执行完了
      } else if (menu.type === 3) {
        permissions.push(menu.permission);
      }
    }
  };
  _recursePermission(userMenus);
  return permissions;
}

export { firstMenu };
