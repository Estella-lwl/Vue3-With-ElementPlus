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
 * 获取权限列表
 * @param queryInfo
 * @returns
 */
export function getRoleList(queryInfo: any) {
  return request.request<IDataType>({
    url: "/users/list",
    method: "post",
    data: queryInfo
  });
}

/**
 * 获取表格数据通用接口
 * @param url 请求路径
 * @param queryInfo 参数对象
 * @returns 表格数组
 */
export function getTableData(url: string, queryInfo: any) {
  return request.request<IDataType>({
    url: url,
    method: "post",
    data: queryInfo
  });
}

/**
 * 表格-操作列-删除
 * @param url 请求路径 /${pageName}/${id}
 * @param queryInfo 参数对象
 * @returns
 */
export function deleteTableData(url: string) {
  return request.request<IDataType>({
    url: url,
    method: "delete"
  });
}

/**
 * 新建用户
 * @param url 请求路径
 * @param data 请求参数
 * @returns
 */
export function createUser(url: string, data: any) {
  return request.request<IDataType>({
    url: url,
    method: "post",
    data: data
  });
}

/**
 * 编辑用户
 * @param url 请求路径
 * @param data 请求参数
 * @returns
 */
export function editUser(url: string, data: any) {
  return request.request<IDataType>({
    url: url,
    method: "patch",
    data: data
  });
}
