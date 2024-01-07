import { useStore } from "@/store";

/**
 *
 * @param pageName 模块
 * @param action 操作
 * @returns 是否查找到 | 布尔值
 */
export function usePermission(pageName: string, action: string) {
  const store = useStore();
  const permissions = store.state.login.permission;

  const verifyPermission = `system:${pageName}:${action}`; //和接口返回格式一致
  return !!permissions.find((item) => item === verifyPermission);
}
