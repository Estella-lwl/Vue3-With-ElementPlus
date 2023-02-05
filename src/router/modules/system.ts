import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/system",
    name: "System",
    redirect: "/system/user",
    // sort: 1,
    // meta: "",
    component: () => import("@/views/System/user.vue"),
    children: [
      {
        path: "/system/user",
        name: "User",
        // sort: 1,
        // meta: "",
        component: () => import("@/views/System/user.vue")
      },
      {
        path: "/system/department",
        name: "Department",
        // sort: 1,
        // meta: ""
        component: () => import("@/views/System/department.vue")
      },
      {
        path: "/system/role",
        name: "Role",
        // sort: 1,
        // meta: ""
        component: () => import("@/views/System/role.vue")
      },
      {
        path: "/system/menu",
        name: "Menu",
        // sort: 1,
        // meta: ""
        component: () => import("@/views/System/menu.vue")
      }
    ]
  }
];

export default routes;
