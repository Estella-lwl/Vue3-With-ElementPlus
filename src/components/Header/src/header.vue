<template>
  <div>
    <el-icon color="#409EFC" :size="20" @click="handleMenuFold">
      <Fold v-if="isFold"></Fold>
      <Expand v-else></Expand>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["menuChange"],
  setup(props, { emit }) {
    console.log(props, emit);

    const isFold = ref(false);

    const handleMenuFold = () => {
      isFold.value = !isFold.value;
      emit("menuChange", isFold.value);
      console.log("已发射", isFold.value);
    };

    return {
      isFold,
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

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
