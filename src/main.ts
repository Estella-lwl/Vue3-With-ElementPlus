import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// 暂时全局引入
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import "normalize.css";
import "./assets/css/index.less";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
