<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Toast } from "vant";

const value = ref("");
const onSearch = (val: string | undefined) => Toast(val);
const onCancel = () => Toast("取消");
const Search = defineProps({
  val: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
:deep(.van-search__action) {
  color: #fb72a6;
}
</style>
