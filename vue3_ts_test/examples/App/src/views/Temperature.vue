<template>
  <div>
    <input type="number" :value="c" @change="changC" /> Celsius =
    <input type="number" :value="f" @change="changF" /> Fahrenheit
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const c = ref(0),
  f = ref(32);

const changC = (e: any, v = +e.target.value) => {
  c.value = v;
  f.value = v * (9 / 5) + 32;
};
const changF = (e: any, v = +e.target.value) => {
  f.value = v;
  c.value = (v - 32) * (5 / 9);
};
</script>

<style scoped></style>
