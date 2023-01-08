<template>
  <div>
    <li>{{ todo.text }}</li>
  </div>
</template>

<script setup lang="ts">
import type { todoType } from "@/types";
const { todo } = defineProps({
  todo: todoType,
});
</script>

<style scoped></style>
