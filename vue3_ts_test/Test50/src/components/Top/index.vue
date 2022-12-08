<template>
  <h2>
    Hello Vue {{ counter.count }}
    <button @click="counter.increment()">+1</button>
  </h2>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>

<style scoped></style>
