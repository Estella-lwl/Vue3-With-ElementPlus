// 登录
export interface ILoginState {
  token: string;
  userInfo: any;
  userMenu: any;
  permission: string[]; //用户按钮权限
}

// dashboard
export interface IDashboardState {
  cateGoodsCount: any[]; //  各种类商品数量
  cateGoodsSale: number[]; // 各种类商品销量
  cateGoodsCollection: number[]; // 各种类商品收藏量
  goodsCitySale: number[]; // 各城市销量
}
