export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginResult {
  id: string;
  name: string;
  token: string;
}

// 这里的IDataType类型不是写死的应该由外面决定，使用泛型&默认是any：
export interface IDataType<T = any> {
  code: number;
  // 请求返回的data不是确定的，所以使用泛型：
  data: T;
}
