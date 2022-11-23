<template>
  <button
    :class="[...theme]"
    :disabled="disabled || loading"
    :style="[...styles]"
  >
    <span class="img">
      <img v-if="loading" src="@/assets/images/loading.png" class="loading" />
      <img v-if="isShow" :src="NewSrc" />
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref } from "vue";
const { type, border, round, disabled, size, minWidth, src, block, loading } =
  defineProps([
    "type",
    "border",
    "round",
    "disabled",
    "size",
    "minWidth",
    "src",
    "block",
    "loading",
  ]);
const theme: string[] | undefined = reactive(["z_button"]);
const styles: string[] | undefined = reactive([]);
let isShow = ref(false);
let NewSrc = ref(src);

if (type) theme.push("z_button_" + type);
if (border) theme.push("is_border");
if (round) theme.push("is_round");
if (size) theme.push("z_button_" + size);
if (minWidth) styles.push(`min-width: ${minWidth}`);
if (src) {
  isShow.value = true;
  let reg: RegExp = /\@/;
  NewSrc = src.replace(reg, "src");
}
if (block) {
  theme.push("z_button_block");
}
</script>

<style scoped lang="scss">
img {
  width: 10%;
  display: block;
  margin-right: 5px;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/*  禁用按钮*/
.z_button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

/*  不显示 */
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

.z_button_large {
  height: 48px;
  font-size: 15px;
}
.z_button_middle {
  // 默认为middle
  height: 40px;
  font-size: 14px;
}
.z_button_small {
  padding: 0 18px;
  height: 36px;
  font-size: 12px;
}
.z_button_mini {
  padding: 0 16px;
  height: 32px;
  font-size: 10px;
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

/**  块级按钮 **/
.z_button_block {
  display: block;
  width: 99%;
}

/* 加载动画 */
.loading {
  animation: loading 2s infinite linear;
}
@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
