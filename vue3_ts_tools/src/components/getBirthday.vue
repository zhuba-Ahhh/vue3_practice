<template>
  <div>
    <input type="text" v-model="day" placeholder="请输入你的生日，格式如3-10" />
    <h2>getBirthday: 距离你的生日 {{ day }} 还有 {{ Birthday }}！</h2>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
// import getBirthday from "@/tools/getBirthday";
import getBirthday from "@/utils/getBirthday.js";
let day = ref("3-10");
let Birthday = ref(getBirthday(day.value));
let timer: number;
watch(day, async (newVal, _oldVal) => {
  if (true) {
    try {
      localStorage.setItem("day", newVal);
    } catch (error) {}
  }
});
onMounted(() => {
  if (localStorage.getItem("day")) {
    day.value = localStorage.getItem("day") || "3-10";
    Birthday.value = getBirthday(localStorage.getItem("day") as string);
  }
  timer = window.setInterval(() => {
    Birthday.value = getBirthday(day.value);
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped></style>
