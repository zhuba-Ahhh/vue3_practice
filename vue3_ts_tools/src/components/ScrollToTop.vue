<template>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <button @click="ScrollToTop(10, 50)">回到顶部</button>
  <button :class="Top" @click="ScrollToTop(100, 20)">返回顶部</button>
</template>

<script setup lang="ts">
// import ScrollToTop from "@/utils/ScrollToTop.js";
import ScrollToTop from "@/tools/ScrollToTop";
import { reactive } from "vue";
let Top = reactive(["myBtn"]);
</script>

<style scoped lang="less">
.myBtn {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
}

.myBtn:hover {
  background-color: rgb(75, 3, 3);
}

.show {
  display: block;
}
</style>
