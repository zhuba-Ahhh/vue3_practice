<template>
  <van-cell-group inset class="input">
    <van-field v-model="text" label="账号" placeholder="你的手机号/邮箱" />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
    />
  </van-cell-group>
  <div class="forgotPassword">
    <p>
      <a class="forgoto">忘记密码</a>
    </p>
  </div>
  <div class="btn">
    <van-row gutter="20">
      <van-col span="2"></van-col>
      <van-col span="8">
        <van-button class="btn1" plain hairlin type="primary" to="#"
          >注册</van-button
        >
      </van-col>
      <van-col span="3"></van-col>
      <van-col span="8" @click="headerC">
        <van-button class="btn2" plain hairlin type="primary" to="/">
          <p class="text">登录</p>
        </van-button>
      </van-col>
    </van-row>
  </div>
  <div class="agreement">
    <p>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</p>
    <p>
      登录或完成注册即代表你同意<a href="">用户协议</a>和<a href="">隐私协议</a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const text = ref("");
const password = ref("");
let headerC = function (event: any) {
  console.log("Main", event);
};
</script>

<style lang="less" scoped>
.input {
  height: 100vh;
  width: 100%;
  height: 30%;
  margin-top: 5%;
  margin-left: 0%;
}
.btn {
  width: 100%;
  height: 30%;
}
.van-button--plain.van-button--primary {
  color: #ff9db5;
}
.btn1 {
  border: 0.1px solid #ff9db5;
  width: 20vh;
  height: 5vh;
}
.btn2 {
  border: 0.1px solid #ff9db5;
  width: 20vh;
  height: 5vh;
  background: #ff9db5;
}
.text {
  color: #ffff;
}

.forgotPassword {
  text-align: right;
  .forgoto {
    margin-right: 8px;
    font-size: 13px;
  }
}
a {
  text-decoration: none;
  color: #fb7299;
  font-size: 12px;
  line-height: 0.426667rem;
}
.agreement {
  font-family: PingFangSC-Regular;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.6rem;
  margin: 25px auto 0;
  color: #757575;
  text-align: center;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
