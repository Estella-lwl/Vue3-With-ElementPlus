export const rules = {
  // 使用： name: [{规则1}, {规则2}]
  name: [
    { required: true, message: "请输入用户名", trigger: "change" },
    {
      pattern: /^[A-z0-9]{3,10}$/, // 3-10个字符。^：以什么开头；$：以什么结尾；中间别加空格!!!!!
      message: "用户名需为3-10个字母或数字",
      trigger: "change"
    }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "change" },
    {
      pattern: /^[A-z0-9]{3,10}$/,
      message: "密码需为3-10个字母或数字",
      trigger: "change"
    }
  ]
};
