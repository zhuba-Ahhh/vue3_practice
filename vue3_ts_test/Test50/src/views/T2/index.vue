<template>
  <div class="body">
    <div class="container">
      <div class="progress-container">
        <div :style="progress" class="progress"></div>
        <div
          v-for="(item, index) in list"
          :class="[...item]"
          :key="index + nanoid()"
        >
          {{ index + 1 }}
        </div>
      </div>
      <button type="button" :class="[...prev]" @click="changePrev">
        上一步
      </button>
      <button type="button" :class="[...next]" @click="changeNext">
        下一步
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { nanoid } from "nanoid";
import "./index.less";

const list = reactive([
    ["circle", "active"],
    ["circle"],
    ["circle"],
    ["circle"],
  ]),
  prev = reactive(["prev", "disabled"]),
  next = reactive(["next", "active"]),
  progress = ref("");
const currentActive = ref(0);
const min = 0,
  max = list.length - 1;

const changeNext = () => {
  if (next[1] === "disabled") return;
  if (currentActive.value >= max - 1) {
    // currentActive = min;
    next[1] = "disabled";
  }
  if (currentActive.value <= max - 1) {
    currentActive.value++;
  }
  if (currentActive.value > 0) {
    prev[1] = "active";
  }
  update();
};
const changePrev = () => {
  if (prev[1] === "disabled") return;
  if (currentActive.value <= 1) {
    // currentActive = max -  1;
    prev[1] = "disabled";
  }
  if (currentActive.value > 0) {
    currentActive.value--;
  }
  if (currentActive.value <= max - 1) {
    next[1] = "active";
  }
  update();
};
const update = () => {
  list.forEach((item, index) => {
    if (index <= currentActive.value) {
      item[1] = "active";
    } else {
      item.length = 1;
    }
  });
  let width = ((100 / max) * currentActive.value).toFixed(4) + "%";
  progress.value = `width:${width}`;
};
</script>

<style scoped></style>
