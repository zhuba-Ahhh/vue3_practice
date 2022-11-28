<template>
  <div class="Control">
    <div class="switch">
      <span>Switch</span>
      <br /><br />
      <Switch type="primary"></Switch>
      <Switch type="success"></Switch>
      <Switch type="warning"></Switch>
      <Switch type="danger"></Switch>
      <Switch type="basis"></Switch>
    </div>
    <br /><br />
    <div class="Cake">
      <span>Cake</span>
      <br /><br />
      <Cake :avg="avg" :radius="radius" :time="time"></Cake>
      <Cake :avg="0.5" :radius="300" time="10"></Cake>
      <Cake avg="0.8" radius="250" :time="5"></Cake>
      <Cake avg="10"></Cake>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from "./Switch/index.vue";
import Cake from "./Cake/index.vue";
import "./control.scss";

let avg: number = 120, // 弧度 360进制 或者1进制  会四舍五入默认值 120 == 0.33
  radius: number = 200, // 半径 默认值 200px span内文字为 0.125倍 半径
  time: number = 20; // 加载时间 每 ms 加一 默认值 20ms
</script>

<style scoped></style>
