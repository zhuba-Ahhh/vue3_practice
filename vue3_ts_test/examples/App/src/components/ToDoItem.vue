<template>
  <div>
    <li>{{ todo.text }}</li>
  </div>
</template>

<script setup lang="ts">
import type { todoType } from "@/types";
const { todo } = defineProps({
  todo: Object,
});
</script>

<style scoped></style>
