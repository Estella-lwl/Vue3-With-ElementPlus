import Mock from "mockjs";
// Mock.mock(url, method, dataTemplate)
Mock.mock("/mock/login", "get", {
  code: 200,
  message: "success",
  success: true,
  data: {
    total: 100,
    "rows|100": [
      {
        "departmentId|1000000000000000008-1999999999999999999": 1,
        "departmentName|1": ["行政部", "人事部", "财务部", "研发部"],
        id: "1063705989926227968",
        mobile: /^1[385][1-9]\d{8}/, // 手机号
        username: "@cname", // @cname 随机生成中文名
        "workNumber|1001-1999": 1,
        "attendanceRecord|31": [
          {
            "adtStatu|1-6": 1,
            "day|+1": 20200301,
            departmentId: "1175310929766055936",
            "id|1000000000000000008-1999999999999999999": 1,
            jobStatu: 0,
            userId: "1063705989926227968"
          }
        ]
      }
    ]
  }
});
