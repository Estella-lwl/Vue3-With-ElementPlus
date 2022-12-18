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
