import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/product",
    name: "Product",
    redirect: "/product/category",
    // sort: 1,
    // meta: "",
    component: () => import("@/views/Product/category.vue"),
    children: [
      {
        path: "/product/category",
        name: "Category",
        // sort: 1,
        // meta: "",
        component: () => import("@/views/Product/category.vue")
      },
      {
        path: "/product/goods",
        name: "Goods",
        // sort: 1,
        // meta: ""
        component: () => import("@/views/Product/goods.vue")
      }
    ]
  }
];

export default routes;
