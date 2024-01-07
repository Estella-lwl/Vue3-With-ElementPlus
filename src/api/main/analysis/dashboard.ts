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
    method: "get",
    showLoading: true
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
    method: "get",
    showLoading: true
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
    method: "get",
    showLoading: true
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
    method: "get",
    showLoading: true
  });
}
