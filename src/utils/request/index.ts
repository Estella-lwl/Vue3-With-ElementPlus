import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { AxiosRequestInterceptors, SelfRequestConfig } from "./types";

// *****该文件后续可能会移至utils文件*****

// 这里使用class因为它有更强的封装性：
export class SelfAxios {
  instance: AxiosInstance; // axios提供的实例的类型
  interceptors?: AxiosRequestInterceptors; //到时传进来的所有拦截器
  constructor(config: SelfRequestConfig) {
    //这里config由AxiosRequestConfig换成上面SelfRequestConfig
    this.instance = axios.create(config); //在构造器中将实例赋值axios的create方法
    this.interceptors = config.interceptors; //这里也可以不保存起来；保存起来后下行可以使用到👇🏻
    //在这里可以将上面扩展好的interceptors使用起来：
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    //响应拦截：
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    //👆🏻这样就可以给实例传入什么拦截就应用什么拦截。

    //********以上是给实例添加拦截器，以下为全局的拦截器添加方式：
    //  这种未指定实例的就是全局的：
    this.instance.interceptors.request.use(
      (config) => {
        console.log("全局请求拦截");
        return config;
      },
      (err) => {
        console.log("全局请求拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("全局响应拦截");
        return res.data;
      },
      (err) => {
        console.log("全局响应拦截");
        return err;
      }
    );
  }
  // //实例化SelfAxios后可以使用这里的request方法：
  // request(config: AxiosRequestConfig) {
  //   this.instance.request(config).then((res) => {
  //     console.log("res", res);
  //   });
  // }

  // ******如果要给单个请求做拦截，request的写法：   ***********
  // 有两种方式：  （注意这里的类型换了）
  request(config: SelfRequestConfig): void {
    //config类型要先换成扩展后的
    // // 方式1. 将config这里转化一下(transformRequest是本来就有提供的)：
    // this.instance.request({ ...config, transformRequest }).then((res) => {
    //   console.log("res", res);
    // });

    // 方式2. 当👇🏻存在时，使用config.interceptors.requestInterceptor的方式转化：
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    this.instance.request(config).then((res) => {
      // 也可以对响应结果做处理：
      if (config.interceptors?.responseInterceptor) {
        // 转换res:
        res = config.interceptors.responseInterceptor(res);
      }
      console.log("res", res);
    });
  }
}
