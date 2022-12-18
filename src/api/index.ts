// 统一出口：
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { SelfRequestInterceptors, SelfRequestConfig } from "./types";
import { SelfAxios } from "../utils/request";
import { BASE_URL, TIME_OUT } from "./common/config";

export class IRequestClass {
  instance?: AxiosInstance;
}

/* 本段创建实例的代码已放在./request/index */
// export function request(config:SelfRequestConfig) {
//   // 创建一个实例对象：
//   const instance = axios.create({
//     baseURL: "",
//     timeout: 500
//   });
//   return instance(config);
// }

export const request = new SelfAxios({
  baseURL: BASE_URL, // 这里不会写死而是拿到不同配置文件中的值
  timeout: TIME_OUT,
  //1. 除了上面的基本配置还可以传进hooks，里面对应的是一个个的拦截器。
  //2. 但不能直接传hook，因为这里要求传进的是AxiosRequestConfig类型，所以要自定义hook。
  interceptors: {
    requestInterceptor: (config) => {
      //在拦截时需要进行的操作可以在这里添加：
      console.log("请求成功的拦截", config);
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败的拦截", err);
      return err;
    },
    responseInterceptor: (config) => {
      console.log("响应成功的拦截", config);
      return config;
    },
    responseInterceptorCatch: (err) => {
      console.log("响应失败的拦截", err);
      return err;
    }
  }
});
