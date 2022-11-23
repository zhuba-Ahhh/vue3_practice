<template>
  <div>Home</div>
  <hr />
  <div class="button">
    <z_button>默认按钮</z_button>
    <z_button type="primary">基础按钮</z_button>
    <z_button type="success">成功按钮</z_button>
    <z_button type="warning">警告按钮</z_button>
    <z_button type="danger">危险按钮</z_button>
  </div>
  <div class="button">
    <z_button class="no">默认按钮</z_button>
    <z_button>基础按钮</z_button>
    <z_button>成功按钮</z_button>
    <z_button>警告按钮</z_button>
    <z_button>危险按钮</z_button>
  </div>
  <div class="button">
    <z_button class="no">默认按钮</z_button>
    <z_button>基础按钮</z_button>
    <z_button>成功按钮</z_button>
    <z_button>警告按钮</z_button>
    <z_button>危险按钮</z_button>
  </div>
  <div class="button">
    <z_button class="no">默认按钮</z_button>
    <z_button>基础按钮</z_button>
    <z_button>成功按钮</z_button>
    <z_button>警告按钮</z_button>
    <z_button>危险按钮</z_button>
  </div>
</template>

<script setup lang="ts">
import z_button from "@/components/button/index.vue";
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.no {
  background-color: #fff;
  border-color: #fff;
  color: #ffffff !important;
}
button {
  margin: 10px 10px;
}
</style>
