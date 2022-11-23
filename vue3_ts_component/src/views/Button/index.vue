<template>
  <div class="button">
    <button class="z_button">默认按钮</button>
    <button class="z_button z_button_primary is_boder">基础按钮</button>
    <button class="z_button z_button_success is_boder">成功按钮</button>
    <button class="z_button z_button_warning is_boder">警告按钮</button>
    <button class="z_button z_button_danger is_boder">危险按钮</button>
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
  &.is_boder {
    background-color: transparent;
    color: #409eff;
  }
}

.z_button_success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is_boder {
    background-color: transparent;
    color: #00d100;
  }
}

.z_button_warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is_boder {
    background-color: transparent;
    color: #e6a23c;
  }
}
.z_button_danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is_boder {
    background-color: transparent;
    color: #f56c6c;
  }
}

/**  圆角 **/
.is_round {
  border-radius: 100px;
}
</style>
