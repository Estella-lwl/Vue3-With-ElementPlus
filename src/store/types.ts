import { ILoginState } from "./modules/types";

export interface IRootStore {
  name: string;
  age: number;
}

// 定义root中的module的类型：
export interface IRootModule {
  login: ILoginState;
}

// 规定为交叉类型：
export type IStoreType = ILoginState & IRootModule;
