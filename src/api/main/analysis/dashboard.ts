import { request } from "@/api";
import { IDataType } from "../../types";

/**
 * 商品数量
 * @param queryInfo
 * @returns
 */
export function getCateGoodsCount() {
  return request.request<IDataType>({
    url: "/goods/category/count",
    method: "get"
  });
}

/**
 * 商品销量
 * @param queryInfo
 * @returns
 */
export function getCateGoodsSale() {
  return request.request<IDataType>({
    url: "/goods/category/sale",
    method: "get"
  });
}

/**
 * 商品收藏量
 * @param queryInfo
 * @returns
 */
export function getCateGoodsCollection() {
  return request.request<IDataType>({
    url: "/goods/category/favor",
    method: "get"
  });
}

/**
 * 城市销量
 * @param queryInfo
 * @returns
 */
export function getGoodsCitySale() {
  return request.request<IDataType>({
    url: "/goods/address/sale",
    method: "get"
  });
}
