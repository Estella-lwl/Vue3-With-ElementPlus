import { request } from "@/api";
import { IDataType } from "../../types";

export function getUserList(queryInfo: any) {
  return request.request<IDataType>({
    url: "/users/list",
    method: "post",
    data: queryInfo
  });
}
