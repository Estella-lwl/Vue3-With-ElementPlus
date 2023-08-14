<template>
  <div class="nav-header">
    <el-icon
      class="fold-menu"
      color="#409EFC"
      :size="20"
      @click="handleMenuFold"
    >
      <Fold v-if="isFold"></Fold>
      <Expand v-else></Expand>
    </el-icon>

    <div class="nav-container">
      <div class="nav-breadcrumb">
        <el-breadcrumb separator="/">
          <template v-for="item in breadCrumbs" :key="item.name">
            <el-breadcrumb-item>
              {{ item.name }}
            </el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <span>{{ username }}</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon><CircleClose /></el-icon>
                退出登录
              </el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { mapPathToBreadcrumb } from "@/utils/mapMenu";

export default defineComponent({
  emits: ["menuChange"],
  setup(props, { emit }) {
    console.log(props, emit);

    const isFold = ref(false);
    const store = useStore();
    const username = computed(() => store.state.login.userInfo.name);
    let breadCrumbs: any = [];

    // 使用计算属性：每次点击更新当前路由信息
    breadCrumbs = computed(() => {
      // 注意这里每次点击菜单栏应拿到最新的 useRoute、userMenu 和 currentPath：
      const route = useRoute();
      const userMenu = store.state.login.userMenu;
      const currentPath = route.path;
      return mapPathToBreadcrumb(userMenu, currentPath);
    });

    const handleMenuFold = () => {
      isFold.value = !isFold.value;
      emit("menuChange", isFold.value);
      console.log("emitted:", isFold.value);
    };

    return {
      isFold,
      username,
      breadCrumbs,
      handleMenuFold
    };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;

    .user-info {
      .el-dropdown-link {
        // display: flex;
        // align-items: center;

        span,
        el-icon {
          vertical-align: middle;
          margin-left: 8px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
