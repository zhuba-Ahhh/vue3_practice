<template>
  <div :style="styles" class="cricle">
    <span :style="span">{{ Math.floor((Avg / 360) * 100) }}%</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import "./cake.scss";

let { avg, radius, time } = defineProps(["avg", "radius", "time"]);
let styles: string[] = reactive([]); // 为主题添加样式
let span = ref(""); // 添加内部样式

if (radius) {
  styles.push(`width:${radius}px`);
  styles.push(`height:${radius}px`);
  span.value = "font-size:" + `${radius * 0.125}px`;
}
let Time: number = time || 20; // 动画时间 不传值就默认为20
let Avg = ref(0); // 圆弧的初始
let avger = avg; // 圆弧的值
if (avger < 1) {
  avger *= 360;
}
styles[2] = `background: conic-gradient(deeppink ${avger}deg, #ededed 0)`;

// 动态加载
onMounted(() => {
  const timer = setInterval(() => {
    if (Avg.value > avger) {
      clearInterval(timer);
    } else {
      Avg.value += 1;
      styles[2] = `background: conic-gradient(deeppink ${Avg.value}deg, #ededed 0);`;
    }
  }, Time);
});
</script>

<style scoped lang="scss"></style>
