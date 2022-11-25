<template>
  <button
    :class="[...theme]"
    :disabled="disabled || loading === true"
    :style="[...styles]"
    @click="$emit('click')"
  >
    <span class="img">
      <img
        v-if="loading === true"
        src="@/assets/images/loading.png"
        class="loading"
      />
      <img v-if="isShow" :src="NewSrc" />
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import "./button.scss";

// const emit = defineEmits(["inFocus", "submit"]);
const {
  type,
  border,
  round,
  disabled,
  size,
  minWidth,
  src,
  block,
  loading,
  beforeChange,
} = defineProps([
  "type",
  "border",
  "round",
  "disabled",
  "size",
  "minWidth",
  "src",
  "block",
  "loading",
  "beforeChange",
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

if (typeof beforeChange == "function") {
  beforeChange()
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => console.log("err:", err));
}

// 点击事件回调
</script>

<style scoped lang="scss">
img {
  width: 10%;
  display: block;
  margin-right: 5px;
}
</style>
