<template>
  <div class="login-panel">
    <h1>登录</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <i class="el-icon-user-solid"></i>
            账号登录
          </span>
        </template>
        <el-form
          label-width="60px"
          ref="formRef"
          :model="account"
          :rules="rules"
        >
          <el-form-item label="账号" prop="name">
            <el-input v-model="account.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input show-password v-model="account.password" />
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <el-form label-width="60px">
          <el-form-item label="手机号" prop="num">
            <el-input v-model="phone.code" />
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <div class="get-code">
              <el-input v-model="phone.code" />
              <el-button type="primary" class="code-btn">获取验证码</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="login"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import { ElForm } from "element-plus";
import { loginRequest } from "@/api/login/login";
import localCache from "@/utils/cache";
import { rules } from "../config/account-config";

const store = useStore();

const isKeepPassword = ref(false);
const account = reactive({
  name: "polar",
  password: "123"
});

const phone = reactive({
  num: "",
  code: ""
});

// const account = reactive({
//   name: localCache.getCache("name") ?? "",
//   password: localCache.getCache("password") ?? ""
// });

const formRef = ref<InstanceType<typeof ElForm>>();

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache("name", account.name);
        localCache.setCache("password", account.password);
      } else {
        localCache.deleteCache("name");
        localCache.deleteCache("password");
      }

      // 2.开始进行登录验证
      store.dispatch("login/accountLoginAction", { ...account });
    }
  });
};
const currentTab = ref("account");

function login() {
  // 点击登录按钮触发vuex中的loginModule方法：
  store.dispatch("login/accountLoginAction", { ...account });
  loginRequest(account).then((res: any) => {
    console.log("res", res);
  });
}
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
