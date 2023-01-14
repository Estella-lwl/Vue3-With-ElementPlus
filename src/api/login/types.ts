export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}

// 这里的IDataType类型不是写死的；使用泛型&默认是any：  （也可以使用json to ts 转）
export interface IDataType<T = any> {
  code: number;
  // 请求返回的data不是确定的，所以使用泛型：
  data: T;
}
