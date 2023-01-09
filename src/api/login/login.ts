import { request } from "../index";
import { IAccount, IDataType, ILoginResult } from "@/api/login/types";

//在之后url可能会有更改，所以可以使用枚举：
enum LoginApi {
  AccountLogin = "/home/multidata"
}

// 写这个类型是为了方便res.data取值
interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}

export function loginRequest(account: IAccount) {
  // 请求是IDataType类型，同时它里面是ILoginResult的类型：
  return request.request<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    method: "get",
    data: account, //data是放在account中的

    // 给当前请求单独设置拦截：
    interceptors: {
      requestInterceptor: (config) => {
        console.log("单独请求的config", config);
        return config;
      },
      responseInterceptor: (res) => {
        console.log("单独响应的res", res);
        return res;
      }
    },
    showLoading: true // 如果这里不传，就会使用封装时设置的默认值true
  });
}
