<template>
  <div>Home</div>
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
    <z_button loading="loading">加载ing</z_button>
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
import z_button from "@/components/button/index.vue";
// const types = ["primary", "success", "warning", "danger"];
let Border: boolean = true,
  Round: boolean = true,
  Disabled: boolean | String = "disabled", // true 也可以
  size: string = "large",
  MinWidth: string = "200px",
  Src = "@/assets/images/daohang.png",
  block = true,
  loading = true;
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
