<!-- <template>
  <div class="button">
    <button class="z_button">默认按钮</button>
    <button class="z_button z_button_primary is_border">基础按钮</button>
    <button class="z_button z_button_success is_border">成功按钮</button>
    <button class="z_button z_button_warning is_border">警告按钮</button>
    <button class="z_button z_button_danger is_border">危险按钮</button>
  </div>
  <div class="button">
    <button class="z_button no">默认按钮</button>
    <button class="z_button z_button_primary">基础按钮</button>
    <button class="z_button z_button_success">成功按钮</button>
    <button class="z_button z_button_warning">警告按钮</button>
    <button class="z_button z_button_danger">危险按钮</button>
  </div>
  <div class="button">
    <button class="z_button no">默认按钮</button>
    <button class="z_button z_button_primary is_round">基础按钮</button>
    <button class="z_button z_button_success is_round">成功按钮</button>
    <button class="z_button z_button_warning is_round">警告按钮</button>
    <button class="z_button z_button_danger is_round">危险按钮</button>
  </div>
  <div class="button">
    <button class="z_button no">默认按钮</button>
    <button class="z_button z_button_primary" disabled>基础按钮</button>
    <button class="z_button z_button_success" disabled>成功按钮</button>
    <button class="z_button z_button_warning" disabled>警告按钮</button>
    <button class="z_button z_button_danger" disabled>危险按钮</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
button {
  margin: 10px 10px;
}

.button {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.z_button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.no {
  background-color: #fff;
  border-color: #fff;
  color: #ffffff !important;
}

.z_button {
  padding: 0 20px;
  border-width: 1px;
  border-style: solid;
  border-style: #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
  height: 40px;
}

.z_button_primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &.is_border {
    background-color: transparent;
    color: #409eff;
  }
}

.z_button_success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is_border {
    background-color: transparent;
    color: #00d100;
  }
}

.z_button_warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is_border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.z_button_danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is_border {
    background-color: transparent;
    color: #f56c6c;
  }
}

/**  圆角 **/
.is_round {
  border-radius: 100px;
}
</style> -->

<template>
  <div>Button</div>
  <hr />
  <div class="button">
    背景按钮：
    <z_button>默认按钮</z_button>
    <z_button type="primary">基础按钮</z_button>
    <z_button type="success">成功按钮</z_button>
    <z_button type="warning">警告按钮</z_button>
    <z_button type="danger">危险按钮</z_button>
  </div>
  <div class="button">
    边框按钮：
    <z_button type="primary" :border="Border">边框按钮</z_button>
    <z_button type="success" :border="Border">边框按钮</z_button>
    <z_button type="warning" border="true">边框按钮</z_button>
    <z_button type="danger" border="Border">边框按钮</z_button>
  </div>
  <div class="button">
    圆角按钮：
    <z_button type="primary" :round="Round">圆角按钮</z_button>
    <z_button type="success" :round="Round">圆角按钮</z_button>
    <z_button type="warning" round="Round">圆角按钮</z_button>
    <z_button type="danger" round="true">圆角按钮</z_button>
  </div>
  <div class="button">
    禁用按钮：
    <z_button type="primary" :disabled="Disabled">禁用按钮</z_button>
    <z_button type="success" :disabled="Disabled">禁用按钮</z_button>
    <z_button type="warning" disabled="true">禁用按钮</z_button>
    <z_button type="danger" disabled="Disabled">禁用按钮</z_button>
  </div>
  <div class="button">
    不同尺寸按钮：
    <z_button type="primary" :size="size">大号按钮</z_button>
    <z_button type="success" size="middle">默认(中号)按钮</z_button>
    <z_button type="warning" size="small">小号按钮</z_button>
    <z_button type="danger" size="mini">迷你按钮</z_button>
  </div>
  <div class="button">
    弹性宽度按钮：
    <z_button type="primary" minWidth="100px">100px</z_button>
    <z_button type="success" minWidth="125px">125px</z_button>
    <z_button type="warning" minWidth="160px">160px</z_button>
    <z_button type="danger" :minWidth="MinWidth">200px</z_button>
  </div>
  <div class="button">
    图标按钮和加载按钮：
    <z_button type="primary" :round="Round" :src="Src">导航</z_button>
    <z_button
      type="success"
      :border="Border"
      src="@/assets/images/shangchuan.png"
    >
      上传
    </z_button>
    <z_button type="warning" border="true" src="@/assets/images/tongzhi.png">
      通知
    </z_button>
    <z_button type="danger" border="Border" src="@/assets/images/xingxing.png">
      收藏
    </z_button>
    <z_button :beforeChange="asyncFunction">按钮</z_button>
    <z_button :loading="!loading">加载ing</z_button>
    <z_button :loading="Loading" @click="change()">
      {{ Loading ? "加载ing" : "点击动画" }}
    </z_button>
  </div>
  <div>
    块级按钮：
    <z_button :block="block">块级按钮</z_button>
    <!-- <z_button block=true">块级按钮</z_button>
    <z_button :block="true">块级按钮</z_button>
    <z_button block="block">块级按钮</z_button> -->
  </div>
</template>

<script setup lang="ts">
import z_button from "@/components/Button/index.vue";
import { ref, type Ref } from "vue";
// const types = ["primary", "success", "warning", "danger"];

// 属性 数据
let Border: boolean | string = true,
  Round: boolean | string = true,
  Disabled: boolean | string = "disabled", // true 也可以
  size: string = "large",
  MinWidth: string = "200px",
  Src: string = "@/assets/images/daohang.png",
  block: boolean | string = true,
  loading: boolean | string = false;

let Loading = ref(loading);

// 事件回调
let change: Function = () => {
  Loading.value = true;
  setTimeout(() => {
    console.log(3000 + "ms");
  }, 3000);
};

let asyncFunction: Function = () => {
  return new Promise<Boolean>((resolve, reject): any => {
    resolve(true);
  });
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.no {
  background-color: #fff;
  border-color: #fff;
  color: #ffffff !important;
}
button {
  margin: 10px;
}
</style>
