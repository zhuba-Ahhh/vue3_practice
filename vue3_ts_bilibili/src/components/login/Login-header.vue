<template>
  <div class="header">
    <div class="text">
      <div class="loginb">登录bilibili</div>
      <div>
        <div class="note" @click="change()">
          <p v-show="!isShow">密码登录</p>
          <p v-show="isShow">短信登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isShow = ref(false);
const change = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="less" scoped>
body {
  background: #f4f4f4;
  height: 100vh;
}
.header {
  width: 100%;
  height: 6vh;
  background: #ffff;
}
.text {
  padding-top: 3%;
  text-align: center;
  display: flex;
  justify-content: center;
}
.loginb {
  color: #212121;
  font-size: 1rem;
  flex: 1 1 10%;
  margin-left: 60px;
}
.note {
  text-align: right;
  font-size: 12px;
  margin-right: 10px;
}
</style>
