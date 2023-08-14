import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/mock/login.js";
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

app.use(ElementPlus);
app.use(store);
setupStore(); // 每次运行都执行一遍setupStore里的loginLastAction：
app.use(router); // 路由匹配之前先注册好；本行一定要在setupStore之后。
app.mount("#app");
