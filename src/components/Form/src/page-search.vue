<template>
  <div class="page-search">
    <BasicForm v-bind="formConfig" v-model="formData">
      <template #header>
        <H3>检索</H3>
      </template>

      <template #formBtn>
        <el-button type="primary">重置</el-button>
        <el-button type="primary">搜索</el-button>
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
    const formData = ref({
      userName: "",
      password: "",
      gender: "",
      date: []
    });

    return {
      formData
    };
  }
});
</script>

<style scoped lang="less">
.page-search {
  /*  */
}
</style>
