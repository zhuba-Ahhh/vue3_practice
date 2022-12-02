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
import { useRouter } from "vue-router";
const router = useRouter();
const value = ref("");
const onSearch = (val: string | undefined) => console.log(val);
const onCancel = () => {
  router.push("/");
};
const Search = defineProps({
  val: {
    type: String,
    default: "",
  },
});
console.log("s", Search.val);
</script>

<style scoped>
:deep(.van-search__action) {
  color: #fb72a6;
}
</style>
