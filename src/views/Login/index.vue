<template>
  <div class="login">
    <h2>登录</h2>
    <button @click="login">点击登录</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();

const account = reactive({
  name: "polar",
  password: "123"
});
function login() {
  // 点击登录按钮触发vuex中的loginModule方法：
  store.dispatch("login/accountLoginAction", { ...account });
}
</script>

<style scoped lang="less">
.login {
}
</style>
