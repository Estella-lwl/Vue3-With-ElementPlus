import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/story",
    name: "Story",
    redirect: "/story/chat",
    // sort: 1,
    // meta: "",
    component: () => import("@/views/Story/chat.vue"),
    children: [
      {
        path: "/story/chat",
        name: "Chat",
        // sort: 1,
        // meta: "",
        component: () => import("@/views/Story/chat.vue")
      },
      {
        path: "/story/list",
        name: "List",
        // sort: 1,
        // meta: ""
        component: () => import("@/views/Story/list.vue")
      }
    ]
  }
];

export default routes;
