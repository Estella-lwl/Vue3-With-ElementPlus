<template>
  <div class="menu">
    <!-- 菜单栏包括logo和菜单列表 -->
    <div class="logo">
      <!-- 菜单栏logo -->
      <img src="~@/assets/logo.png" alt="" />
      <span>Vue3+TS</span>
    </div>
    <div class="menu-content">
      <el-menu class="el-menu-vertical-demo" default-active="2">
        <template v-for="item in menuStore" :key="item.id"></template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import { useStore } from "vuex";
import { useStore } from "@/store";

const store = useStore(); //这时会发现鼠标悬停时类型提示已经是自定义后的
console.log("菜单store", store, store.state.login);
const menuStore = computed(() => {
  return store.state.login;
});
</script>

<style scoped lang="less">
.menu {
  overflow-x: hidden;
  overflow-y: auto;
  // line-height: 200px;
  text-align: left;
  height: 100%;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  .logo {
    padding: 13px;
    height: 38px;
    color: aliceblue;
    font-size: 25px;

    img {
      height: 100%;
      vertical-align: middle; /* 文字基准线 */
    }

    span {
      margin: 0 10px;
    }
  }
}

.menu-content {
  padding: 0 10px;
}
</style>
