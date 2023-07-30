<template>
  <div class="user">
    <PageSearch :form-config="formConfig"></PageSearch>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formConfig } from "./config/search.config";
import PageSearch from "@/components/PageSearch";

export default defineComponent({
  name: "User",
  components: { PageSearch },
  setup() {
    return {
      formConfig
    };
  }
});
</script>

<style lang="less">
/*  */
</style>
