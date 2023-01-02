import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { AxiosRequestInterceptors, SelfRequestConfig } from "./types";
import { ElLoading } from "element-plus";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";

// *****该文件后续可能会移至utils文件*****

// 这里使用class因为它有更强的封装性：
export class SelfAxios {
  instance: AxiosInstance; // axios提供的实例的类型
  interceptors?: AxiosRequestInterceptors; //到时传进来的所有拦截器
  showLoading: boolean; //这里没有定义为可选的原因：使用👇🏻16行的写法使其有默认值
  loading?: LoadingInstance;
  //这里config由AxiosRequestConfig换成上面SelfRequestConfig：
  constructor(config: SelfRequestConfig) {
    /*
        创建axios实例👇🏻：
    */
    this.instance = axios.create(config); //在构造器中将实例赋值axios的create方法
    /*
        保存一些基本信息👇🏻：
    */
    this.showLoading = config.showLoading ?? true; //如果??的左边不成立 则执行右边的默认值。
    this.interceptors = config.interceptors; //这里也可以不保存起来；保存起来后下行可以使用到👇🏻
    /*
        使用拦截器👇🏻：：
    */
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
        this.loading = ElLoading.service({
          lock: true,
          text: "Loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
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
        const data = res.data;
        // this.loading?.close(); //有响应后关闭loading状态
        setTimeout(() => {
          this.loading?.close();
        }, 1000);
        //全局响应失败的拦截： (情况2.以响应成功的形式返回失败)
        if (data.code === "") {
          console.log("");
        } else {
          return data;
        }
      },
      (err) => {
        console.log("全局响应拦截");
        this.loading?.close(); //失败后也要关闭loading状态，否则会一直loading。
        //全局响应失败的拦截： (情况1.根据后端返回的错误码做出提示)
        switch (err.response.status) {
          case "404":
            alert("404");
            break;
          case "501":
            alert("501");
            break;
        }
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
  request<T>(config: SelfRequestConfig): Promise<T> {
    //改用return Promise的方式；注意不再是void类型而是promise👆🏻。
    // 注意：promise拿到结果的类型应该是由请求者决定，所以使用泛型👆🏻。
    return new Promise((resolve, reject) => {
      //config类型要先换成扩展后的
      // // 方式1. 将config这里转化一下(transformRequest是本来就有提供的)：
      // this.instance.request({ ...config, transformRequest }).then((res) => {
      //   console.log("res", res);
      // });

      // 方式2. 当👇🏻存在时，使用config.interceptors.requestInterceptor的方式转化：
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      // 判断是否需要显示loading：
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 也可以对响应结果做处理：
          //  1. 单个请求对数据的处理：
          if (config.interceptors?.responseInterceptor) {
            // 转换res:
            res = config.interceptors.responseInterceptor(res);
          }
          // 将showLoading设置为true，避免影响下一个请求：
          this.showLoading = true;
          console.log("res", res);
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置为true，避免影响下一个请求：
          this.showLoading = true;
          reject(err);
          return err;
        });
    });
  }
}
