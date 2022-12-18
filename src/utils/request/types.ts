import { AxiosRequestConfig, AxiosResponse } from "axios";

//在这里定义好可以传入哪些hook（也就是拦截器）：
export interface AxiosRequestInterceptors {
  // 可以有四个interceptor:
  //  当interceptor传进来后，会被放进request实例中(看17行的使用)；拦截器参数config的类型就是AxiosRequestConfig，其返回值也是AxiosRequestConfig。
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any; //错误拦截；any类型

  //  响应拦截：
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (err: any) => any; //错误拦截；any类型
}

// 对原本的AxiosRequestConfig做扩展，使其可以做到传递一些hooks拦截器：
export interface SelfRequestConfig extends AxiosRequestConfig {
  interceptors?: AxiosRequestInterceptors; //继承AxiosRequestConfig后，给它添加一个interceptor扩展。
}
