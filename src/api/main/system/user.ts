import { request } from "@/api";
import { IDataType } from "../../types";

export function getUserList(queryInfo: any) {
  return request.request<IDataType>({
    url: "/users/list",
    method: "post",
    data: queryInfo
  });
}

/**
 * 获取表格通用接口
 * @param queryInfo
 * @returns
 */
export function getTableData(url: string, queryInfo: any) {
  return request.request<IDataType>({
    url: url,
    method: "post",
    data: queryInfo
  });
}
