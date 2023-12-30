/* 引入时顺便起别名因为自定义的也叫这个： */
import { createStore, Store, useStore as useVuexStore } from "vuex"; // 其中Store是vuex提供的一个类型
import { IRootStore, IStoreType } from "./types";
import login from "./modules/login";
import { getTableData } from "@/api/main/system/user";

// 使createStore接收一个泛型：
const store = createStore<IRootStore>({
  state() {
    // 最终要返回个对象：
    return {
      name: "polariis",
      age: 1,
      allDepartment: [],
      allRole: [],
      allMenu: []
    };
  },
  getters: {},
  mutations: {
    changeAllDepartment(state, list) {
      state.allDepartment = list;
    },
    changeAllRole(state, list) {
      state.allRole = list;
    },
    changeAllMenu(state, list) {
      state.allMenu = list;
    }
  },
  actions: {
    // 1.请求
    async getTableDataAction({ commit }) {
      // ES6解构别名，避免命名冲突。
      const department = await getTableData("/department/list", { size: 100 });
      const { list: departmentData } = department.data;

      const role = await getTableData("role/list", { size: 100 });
      const { list: roleData } = role.data;

      const menu = await getTableData("menu/list", {});
      const { list: menuList } = menu.data;

      // 2.保存
      commit("changeAllDepartment", departmentData);
      commit("changeAllRole", roleData);
      commit("changeAllMenu", menuList);
    }
  },
  // 将所有子模块统一在这里注册：
  modules: {
    login
  }
});

export function useStore(): Store<IStoreType> {
  // 将vuex的useStore起别名后再return出去，而在这个过程中已经给它明确制定了类型：
  return useVuexStore();
}

// vuex在刷新后数据会消失，所以数据持久化：
export function setupStore() {
  store.dispatch("login/loginLastAction"); //调用login中的action
  store.dispatch("getTableDataAction");
}

export default store;
