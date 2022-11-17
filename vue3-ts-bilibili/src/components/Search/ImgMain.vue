<template>
  <div class="Main">
    <h2 id="title">大家都在搜</h2>
    <div v-show="Search.show" class="main">
      <img src="@/assets/images/notFound.png" alt="" />
      <p>加载ing</p>
    </div>
    <div v-show="!Search.show"></div>
  </div>
</template>

<script setup lang="ts">
const Search = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
console.log(Search.show);
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f4f4f4 !important;
}
.main {
  height: 100vh;
  padding-top: 26.66667vw;
  text-align: center;
  font-size: 3.46667vw;
  background: #f4f4f4;
  color: #757575;
}
#title {
  color: #999;
  font-size: 3.73333vmin;
  font-weight: 400;
  margin: 10px;
}
</style>
