<template>
  <h2>
    Hello Vue {{ counter.count }}
    <button @click="counter.increment()">+{{ counter.counter }}</button>
    <button @click="counter.subtract()">-{{ counter.counter }}</button>
    <button @click="counter.setCounter(counter.counter + 1)">
      set counter:{{ counter.counter + 1 }}
    </button>
    <button @click="counter.setCounter(counter.counter - 1)">
      set counter:{{ counter.counter - 1 }}
    </button>
  </h2>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>

<style scoped lang="less">
button {
  margin-left: 3px;
}
</style>
