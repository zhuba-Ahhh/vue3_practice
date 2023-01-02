<template>
  <div>
    <input type="number" :value="c" @change="changC" /> Celsius =
    <input type="number" :value="f" @change="changF" /> Fahrenheit
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const c = ref<number>(0),
  f = ref<number>(32);

const changC = (e: Event, v = +(e.target as HTMLInputElement).value) => {
  c.value = v;
  f.value = v * (9 / 5) + 32;
};
const changF = (e: Event, v = +(e.target as HTMLInputElement).value) => {
  f.value = v;
  c.value = (v - 32) * (5 / 9);
};
</script>

<style scoped></style>
