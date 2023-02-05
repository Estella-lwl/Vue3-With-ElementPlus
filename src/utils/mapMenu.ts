import { RouteRecordRaw } from "vue-router";

const allRoutes: RouteRecordRaw[] = [];
const routes: RouteRecordRaw[] = [];
export function mapMenu(userMenu: any[]): RouteRecordRaw[] {
  // S1. 先加载所有的routes：
  // webpack中的函数：参数1.传入一个路径；参数2.是否递归查找(有文件夹嵌套时)；参数3.正则匹配所有main中ts文件：
  const routeFiles = require.context("../router/main", true, /\.ts/);
  console.log("查找结果： ", routeFiles);

  routeFiles.keys().forEach((key) => {
    console.log("当前path", key);

    // S2.根据菜单获取需要添加的routes：
    const route = require("../router/main" + key.split(".")[1]);
    console.log("route: ", route.default);

    allRoutes.push(route.default);
    console.log("allRoutes", allRoutes);
  });

  // function routerGenerator(menus: any[]) {
  //   // 遍历菜单层级下的每一项：
  //   for (const menu of menus) {
  //     console.log("menu: ", menu);
  //     // type=2：处于第2层级：
  //     if (menu.type === 2) {
  //       // 当处于第1层级，在allRoutes中拿到当前匹配的route：
  //       const currentRoute = allRoutes.find((route) => {
  //         console.log("route: ", route);
  //         // 当route.path=menu.url就代表找到了当前route：
  //         return route.path === menu.url;
  //       });
  //       // 当找到👆🏻时将它放进routes数组：
  //       if (currentRoute) {
  //         routes.push(currentRoute);
  //       } else {
  //         // 当处于第1层级，递归children：
  //         routerGenerator(menu.children);
  //       }
  //     }
  //     /* 经过以上递归后，会将所有匹配到的path对应的路由添加到routes中。 */
  //   }
  // }
  routerGenerator(userMenu);

  return routes;
}

// 递归菜单生成路由：： 传进一个menus
export function routerGenerator(menus: any[]) {
  // 遍历菜单层级下的每一项：
  for (const menu of menus) {
    console.log("menu: ", menu);
    // type=2：处于第2层级：
    if (menu.type === 2) {
      // 当处于第1层级，在allRoutes中拿到当前匹配的route：
      const currentRoute = allRoutes.find((route) => {
        console.log("route: ", route);
        // 当route.path=menu.url就代表找到了当前route：
        return route.path === menu.url;
      });
      // 当找到👆🏻
      if (currentRoute) {
        routes.push(currentRoute);
      }
    } else {
      // 当处于第1层级，递归children：
      routerGenerator(menu.children);
    }
    /* 经过以上递归后，会将所有匹配到的path对应的路由添加到routes中。 */
  }
}
