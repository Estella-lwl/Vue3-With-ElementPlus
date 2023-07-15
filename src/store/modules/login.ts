import { Module } from "vuex"; // 为了与TS结合使用，使用vuex4时需要从vuex中引入Modules。
import { ILoginState } from "./types";
import { IRootStore } from "../types";
import { loginRequest, getUserInfo, getUserMenu } from "@/api/login/login";
import { IAccount } from "@/api/login/types";
import LocalCache from "@/utils/cache";
import { mapMenu } from "@/utils/mapMenu";
import router from "@/router";

// 划分模块后，每个模块中Module都要有两个泛型，分别代表：当前模块和根模块的state类型。
const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenu: {}
    };
  },
  getters: {},
  mutations: {
    // 将以下数据存起来：
    saveToken(state, token: string) {
      state.token = token;
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    saveUserMenu(state, userMenu: any) {
      state.userMenu = userMenu;
      // 在这里对菜单根据权限生成路由映射后再存起来：
      console.log("菜单@@@@@@", userMenu);
      const routes = mapMenu(userMenu);
      console.log("遍历后的结果: ", routes);

      // route放进 =》router.main.children中（利用addRoute）：
      // router.addRoute(); //TODO:暂时注释，改为👇🏻
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
    }
  },
  actions: {
    // action中的函数接收两个参数：上下文、value。
    // accountLoginAction({ commit }, payload: any) {   旧的方式
    //   console.log("执行accountLoginAction", payload);
    //   // 1. 登录逻辑，发送请求：
    //   const loginRequest = loginRequest();
    // }

    /* 使用async的方式： */
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 登录逻辑，发送请求：
      const loginData = await loginRequest(payload);
      const { id, token } = loginData.data;
      console.log("id和token", id, token);
      commit("saveToken: ", token); // 调用commit操作savaToken
      LocalCache.setCache("token", token); // 将拿到的token存入localStorage

      // 2. 请求用户信息：
      const users = await getUserInfo(id);
      const userInfo = users.data;
      console.log("userInfo: ", userInfo);
      commit("saveUserInfo", userInfo.data); //操作mutation
      LocalCache.setCache("userInfo", userInfo);

      // 3. 请求用户菜单：
      const menu = await getUserMenu(userInfo.role.id);
      const userMenu = menu.data;
      console.log("userMenu: ", userMenu);
      commit("saveUserMenu", userMenu);
      LocalCache.setCache("userMenu", userMenu);

      // 4. 跳转至首页：
      router.push("/layout");
    },

    // 5. vuex数据持久化：
    loginLastAction({ commit }) {
      const token = LocalCache.getCache("token");
      const userInfo = LocalCache.getCache("userInfo");
      const userMenu = LocalCache.getCache("userMenu");
      if (token) {
        commit("saveToken", token);
      }
      if (userInfo) {
        commit("saveUserInfo", userInfo);
      }
      if (userMenu) {
        commit("saveUserMenu", userMenu);
      }
    }
  }
};

export default loginModule;
