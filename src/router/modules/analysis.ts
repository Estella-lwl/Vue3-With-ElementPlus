import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/analysis",
    name: "analysis",
    redirect: "/analysis/overview",
    // sort: 1,
    // meta: "",
    component: () => import("@/views/Analysis/overview.vue"),
    children: [
      {
        path: "/analysis/overview",
        name: "Overview",
        // sort: 1,
        // meta: "",
        component: () => import("@/views/Analysis/overview.vue")
      },
      {
        path: "/analysis/dashboard",
        name: "Dashboard",
        // sort: 1,
        // meta: ""
        component: () => import("@/views/Analysis/dashboard/dashboard.vue")
      }
    ]
  }
];

export default routes;
