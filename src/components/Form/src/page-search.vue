<template>
  <div class="page-search">
    <BasicForm v-bind="formConfig" v-model="formData">
      <template #header>
        <p class="search-title">检索</p>
      </template>

      <template #formBtn>
        <div class="search-btn">
          <el-button type="primary">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </BasicForm>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import BasicForm from "@/base-ui/BasicForm";

export default defineComponent({
  components: {
    BasicForm
  },

  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },

  setup() {
    const formData = ref({});

    return {
      formData
    };
  }
});
</script>

<style scoped lang="less">
.page-search {
  .search-title {
    font-size: 20px;
    font-weight: 700;
  }

  .search-btn {
    text-align: center;
  }
}
</style>
