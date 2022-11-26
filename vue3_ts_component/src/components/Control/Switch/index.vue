<template>
  <div :class="[...theme]" @click="change">
    <i></i>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import "./switch.scss";
const { type } = defineProps(["type"]);
const theme: string[] | undefined = reactive(["z_switch"]);

if (type) {
  let temp = "z_switch_" + type;
  theme.push(temp);
}

let change = () => {
  if (theme.length < 3) {
    theme.push("z_switch_activate");
  } else {
    theme.length = 2;
  }
};
</script>
<style scoped lang="scss"></style>
