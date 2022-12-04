<template>
  <div>
    R:<input type="text" v-model="r" /> G:<input type="text" v-model="g" />
    B:<input type="text" v-model="b" /> RGB:{{ rgb }}
    <h2>changeColorHex:{{ colorHex }}</h2>
    <h2>changeColorRgb:{{ colorRgb }}</h2>
    <h2>isFunction:{{ flag }}</h2>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// import isFunction from "@/utils/isFunction.js";
import isFunction from "@/tools/isFunction";
// import { changeColorHex, changeColorRgb } from "@/utils/changeColor.js";
import { changeColorHex, changeColorRgb } from "@/tools/changeColor";
let r = ref(0),
  g = ref(0),
  b = ref(0);

let colorHex = computed(() => changeColorHex(r.value, g.value, b.value));
let colorRgb = computed(() => changeColorRgb(colorHex.value));
let rgb = computed(() => r.value + "," + g.value + "," + b.value);
let flag: boolean = isFunction(changeColorHex);
</script>

<style scoped></style>
