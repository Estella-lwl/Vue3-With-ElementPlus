<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside class="el-aside" :width="isCollapse ? '80px' : '200px'">
        <Menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <Header @menuChange="handleMenuChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Menu from "@/components/Menu";
import Header from "@/components/Header";

export default defineComponent({
  components: {
    Menu,
    Header
  },
  setup() {
    // 将菜单状态保存在当前组件：
    const isCollapse = ref(false);
    const handleMenuChange = (isFold: boolean) => {
      isCollapse.value = isFold;
    };

    return {
      isCollapse,
      handleMenuChange
    };
  }
});
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 48px !important;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  // line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  // 菜单折叠速度：
  transition: width 0.2s;
  -webkit-transition: width 0.2s;
  -moz-transition: width 0.2s;
  -webkit-transition: width 0.2s;
  -o-transition: width 0.2s;
}
.el-main {
  color: #333;
  background-color: #f0f2f5;
}
</style>
