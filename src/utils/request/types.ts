import { AxiosRequestConfig, AxiosResponse } from "axios";

/*
    在这里定义好可以传入哪些hook（也就是拦截器）：
 */

// 给接口使用泛型 & 给默认值（否则23行使用该接口时会报错）：
export interface AxiosRequestInterceptors<T = AxiosResponse> {
  // 可以有四个interceptor:
  //  当interceptor传进来后，会被放进request实例中(看17行的使用)；拦截器参数config的类型就是AxiosRequestConfig，其返回值也是AxiosRequestConfig。
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any; //错误拦截；any类型

  //  响应拦截：
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse; //由于request类型被推导后为其指定了泛型，为处理res的那行代码正常使用所以本行暂时改为下一行：
  // responseInterceptor?: (res: any) => any;   // 临时更改；最后改为下一行：
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any; //错误拦截；any类型
}

// 对原本的AxiosRequestConfig做扩展，使其可以做到传递一些hooks拦截器：
// 很多地方使用到了SelfRequestConfig，可能会被单独使用到，最好给它也指定泛型和默认值：
export interface SelfRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: AxiosRequestInterceptors<T>; //继承AxiosRequestConfig后，给它添加一个interceptor扩展。
  showLoading?: boolean;
}
