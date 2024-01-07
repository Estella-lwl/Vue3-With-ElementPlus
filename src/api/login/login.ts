import { request } from "../index";
import { IAccount, ILoginResult } from "@/api/login/types";
import { IDataType } from "@/api/types";

//在之后url可能会有更改，所以采用枚举：
enum LoginApi {
  AccountLogin = "/login",
  UserInfo = "/users/",
  UserMenu = "/role/"
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
    method: "post",
    data: account, //data是放在account中的

    // 给当前请求单独设置拦截：
    interceptors: {
      requestInterceptor: (config) => {
        return config;
      },
      responseInterceptor: (res) => {
        return res;
      }
    },
    showLoading: true // 如果这里不传，就会使用封装时设置的默认值false
  });
}

// 获取用户id：
export function getUserInfo(id: number) {
  return request.request<IDataType>({
    // 将用户id与接口地址拼接：
    url: LoginApi.UserInfo + id,
    method: "get"
  });
}

// 获取用户菜单：
export function getUserMenu(id: number) {
  return request.request<IDataType>({
    // 将用户id与接口地址拼接：
    url: LoginApi.UserMenu + id + "/menu",
    method: "get"
  });
}
