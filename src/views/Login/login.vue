<template>
  <div class="login">
    <div class="login-panel">
      <p class="title">登录</p>
      <el-tabs
        type="border-card"
        stretch
        v-model="currentTab"
        class="panel-content"
      >
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <i class="el-icon-user-solid"></i>
              账号登录
            </span>
          </template>
          <el-form
            ref="formRef"
            :model="account"
            :rules="rules"
            class="login-form"
          >
            <el-form-item label="账号" prop="name" class="login-form-item">
              <el-input v-model="account.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                autocomplete="off"
                show-password
                v-model="account.password"
              />
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <i class="el-icon-mobile-phone"></i>
              手机登录
            </span>
          </template>
          <el-form
            label-width="60px"
            ref="formRef"
            :model="phone"
            :rules="rules"
            class="login-form"
          >
            <el-form-item label="手机号" prop="num" class="login-form-item">
              <el-input v-model="phone.code" />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <div class="get-code">
                <el-input v-model="phone.code" />
                <el-button type="primary" class="code-btn"
                  >获取验证码</el-button
                >
              </div>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>

      <div class="account-control">
        <el-checkbox v-model="isKeepPassword" class="keep-psw">
          记住密码
        </el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>

      <div class="login-btn">
        <el-button class="login-btn-inner" type="primary" @click="handleLogin">
          立即登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import loginPanel from "./components/login-panel.vue";
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import { ElForm } from "element-plus";
import { loginRequest } from "@/api/login/login";
import localCache from "@/utils/cache";
import { rules } from "./config/account-config";

const store = useStore();

// form表单的类型可以使用typeof及组件自带类型：
const formRef = ref<InstanceType<typeof ElForm>>();
// 给el-tab一个默认的name值:
const currentTab = ref("account");
const isKeepPassword = ref(false);

const account = reactive({
  // 缓存中没有账号信息的话 =》就为空：
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
});

const phone = reactive({
  num: "",
  code: ""
});

const handleLogin = () => {
  let data: any = {};
  if (currentTab.value === "account") {
    data = account;
  } else {
    data = phone;
  }
  formRef.value?.validate((valid) => {
    // 表单验证通过 => 登录逻辑：
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword.value) {
        //  记住密码：取本地缓存（也可以给这些缓存加密）
        localCache.setCache("name", account.name);
        localCache.setCache("password", account.password);
      } else {
        //  用户选择不记密码：清缓存
        localCache.removeCache("name");
        localCache.removeCache("password");
      }

      // 2.登录验证。点击登录按钮触发vuex中的loginModule方法：
      //   调用dispatch，同时传递两个参数：什么操作、传递的值；
      //    通过解构，拿到：
      store.dispatch("login/accountLoginAction", { ...account });
      //
      loginRequest(data).then((res: any) => {
        console.log("res", res);
      });
    }
  });
};
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1f334bed;

  .login-panel {
    margin-bottom: 150px;
    width: 20%;

    /deep/ .el-tabs__item,
    /deep/.is-top {
      border: none;
    }

    .panel-content {
      padding: 25px 25px;
      border-radius: 8px;

      .login-form {
        margin-top: 20px;

        .login-form-item {
          margin-bottom: 30px;
        }
      }

      .get-code {
        display: flex;

        .code-btn {
          margin-left: 8px;
          width: 85px;
        }
      }
    }

    .title {
      text-align: center;
      margin-bottom: 40px;
      font-size: 28px;
      color: #f0f0f0;
    }

    .keep-psw {
      color: #f0f0f0;
    }
    .account-control {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

    .login-btn {
      margin-top: 23px;
      text-align: center;

      .login-btn-inner {
        width: 80%;
      }
    }
  }
}
</style>
