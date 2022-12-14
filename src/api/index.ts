// 统一出口：
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./types";
import { AxiosRequest } from "./request";
import { BASE_URL, TIME_OUT } from "./common/config";

export class IRequestClass {
  instance?: AxiosInstance;
}

/* 本段创建实例的代码已放在./request/index */
// export function request(config: HYRequestConfig) {
//   // 创建一个实例对象：
//   const instance = axios.create({
//     baseURL: "",
//     timeout: 500
//   });
//   return instance(config);
// }

export const request = new AxiosRequest({
  baseURL: BASE_URL, // 这里不会写死而是拿到不同配置文件中的值
  timeout: TIME_OUT
});
