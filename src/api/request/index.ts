import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// 该文件后续可能会移至utils文件

// 这里使用class因为它有更强的封装性：
export class AxiosRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log("res", res);
    });
  }
}
