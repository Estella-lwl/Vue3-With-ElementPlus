<template>
  <div class="menu">
    <!-- 菜单栏包括logo和菜单列表 -->
    <div class="logo">
      <!-- 菜单栏logo -->
      <img src="~@/assets/logo.png" alt="" />
      <span>管理后台</span>
    </div>
    <el-menu
      class="el-menu"
      default-active="2"
      :unique-opened="true"
      text-color="#fff"
      background-color="#001529"
      active-text-color="#409Eff"
    >
      <template v-for="item in menuStore" :key="item.id">
        <!-- type=1：有二级菜单 -->
        <template v-if="item.type">
          <!-- 二级菜单的标题： -->
          <el-sub-menu class="el-submenu" :index="String(item.sort)">
            <template #title>
              <el-icon v-if="item.icon" color="#409EFC" :size="20">
                <component :is="item.icon.split('-').slice(2).join('-')" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单子目录： -->
            <template v-for="children in item.children" :key="children.id">
              <el-menu-item class="el-menu-item" :index="String(children.sort)">
                <el-icon v-if="children.icon" color="#409EFC" :size="20">
                  <component
                    :is="children.icon.split('-').slice(2).join('-')"
                  />
                </el-icon>
                <span>{{ children.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级菜单： -->
        <template v-else>
          <el-menu-item :index="String(item.sort)">
            <el-icon v-if="item.icon" color="#409EFC" :size="20">
              <component :is="item.icon.split('-').slice(2).join('-')" />
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import { useStore } from "vuex";   对vuex类型做处理后，使用下一行👇🏻
import { useStore } from "@/store";

const store = useStore(); //这时会发现鼠标悬停时类型提示已经是自定义后的
console.log("菜单store", store, store.state.login);
const menuStore = computed(() => {
  return store.state.login.userMenu;
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
  color: #fff;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  .logo {
    padding: 13px;
    height: 38px;
    font-size: 20px;

    img {
      height: 100%;
      vertical-align: middle; /* 文字基准线 */
    }

    span {
      margin: 0 10px;
      line-height: 22px;
    }
  }

  .menu-content {
    .el-menu {
      border-right: none;

      // 目录
      .el-submenu {
        background-color: #001529 !important;
        // 二级菜单 ( 默认背景 )
        .el-menu-item {
          padding-left: 50px !important;
          background-color: #0c2135 !important;
        }
      }

      ::v-deep .el-submenu__title {
        background-color: #001529 !important;
      }

      // hover 高亮
      .el-menu-item:hover {
        color: #fff !important; // 菜单
      }

      .el-menu-item.is-active {
        color: #fff !important;
        background-color: #0a60bd !important;
      }
    }
  }
}

.menu-content {
  padding: 0 10px;
}
</style>
