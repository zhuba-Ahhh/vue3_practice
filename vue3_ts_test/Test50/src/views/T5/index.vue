<template>
  <div class="body5">
    <h2 class="title">Custom Range Slider 自定义范围滑块</h2>
    <div class="range-container">
      <input
        type="range"
        id="range"
        :min="min"
        :max="max"
        placeholder=""
        :style="[...inputStyle]"
        ref="inputRef"
      />
      <label
        class="range-label"
        v-text="labelHtml"
        :style="[...labelStyle]"
        for="range"
      ></label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, type Ref } from "vue";

const labelStyle = reactive(["width: 80px", ""]),
  inputStyle = reactive(["width: 300px"]),
  min: Ref<number> = ref(0),
  max: Ref<number> = ref(100),
  labelHtml: Ref<number> = ref(50),
  inputValue: Ref<number> = ref(labelHtml.value),
  inputRef: Ref<Element | null> = ref(null);

watch(inputValue, () => {
  labelHtml.value = inputValue.value;
});
const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): number =>
  ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
</script>

<style scoped src="./index.less" lang="less"></style>
