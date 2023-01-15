import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import mock from "mockjs";
import ElementPlus from "element-plus"; // 暂时全局引入
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons-vue";
import "normalize.css";
import "./assets/css/index.less";
import { setupStore } from "@/store";
// 统一导入 element 图标

const app = createApp(App);

// 注册全局 element-icons 组件
for (const [key, component] of Object.entries(ElIcons)) {
  app.component(key, component);
}

app.use(store).use(router).use(ElementPlus).mount("#app");

// 每次运行都执行一遍setupStore里的loginLastAction：
setupStore();

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}
