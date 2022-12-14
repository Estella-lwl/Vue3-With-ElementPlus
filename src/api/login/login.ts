import { request } from "../index";
import { IAccount } from "./types";

//在之后url可能会有更改，所以可以使用枚举：
enum LoginApi {
  AccountLogin = "/home/multidata"
}

export function loginRequest(account: IAccount) {
  return request.request({
    url: LoginApi.AccountLogin,
    method: "get",
    data: account //data是放在account中的
  });
}
