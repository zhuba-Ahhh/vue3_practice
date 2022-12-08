<template>
  <div class="body3">
    <div :class="searchContainer">
      <input
        type="text"
        class="input"
        placeholder="请输入你要搜索的内容"
        ref="input"
      />
      <button class="search-btn" @click="change" title="serch">
        <i class="search-icon"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref } from "vue";
import "./index.less";
const searchContainer: Array<string> = reactive(["search"]);
const input: Ref<HTMLElement | null> = ref(null);
const change = (): void => {
  if (searchContainer.length === 1) {
    searchContainer[1] = "active";
  } else searchContainer.length = 1;
  if (input.value) {
    input.value.focus();
  }
};
</script>

<style scoped></style>
