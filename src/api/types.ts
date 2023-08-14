import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface SelfRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface SelfRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: SelfRequestInterceptors<T>;
  showLoading?: boolean;
}

/**
 * - 该类型用做部分接口的返回值类型；
 * - 这里的IDataType类型不是写死的；使用泛型&默认是any（也可以使用json to ts转）。
 */
export interface IDataType<T = any> {
  code: number;
  // 请求返回的data不是确定的 => 使用泛型：
  data: T;
}
