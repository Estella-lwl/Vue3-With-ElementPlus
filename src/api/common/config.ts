//  根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = "";
const TIME_OUT = 10000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "";
} else {
  BASE_URL = "";
}

// 这里的定义方式只能这样导出，属于ES Module的语法：
export { BASE_URL, TIME_OUT };
