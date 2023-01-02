import { AxiosRequestConfig, AxiosResponse } from "axios";

//在这里定义好可以传入哪些hook（也就是拦截器）：
export interface AxiosRequestInterceptors {
  // 可以有四个interceptor:
  //  当interceptor传进来后，会被放进request实例中(看17行的使用)；拦截器参数config的类型就是AxiosRequestConfig，其返回值也是AxiosRequestConfig。
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any; //错误拦截；any类型

  //  响应拦截：
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse; //由于request类型被推导后为其指定了泛型，为处理res的那行代码正常使用所以本行暂时改为：
  responseInterceptor?: (res: any) => any;
  responseInterceptorCatch?: (err: any) => any; //错误拦截；any类型
}

// 对原本的AxiosRequestConfig做扩展，使其可以做到传递一些hooks拦截器：
export interface SelfRequestConfig extends AxiosRequestConfig {
  interceptors?: AxiosRequestInterceptors; //继承AxiosRequestConfig后，给它添加一个interceptor扩展。
  showLoading?: boolean;
}
