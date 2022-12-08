<template>
  <div class="body1">
    <div
      class="ec-panel"
      v-for="(item, index) in imageItems"
      :key="index + nanoid()"
      :class="index === currentIndex ? 'active' : ''"
      :style="{ backgroundImage: `url(${imageURL + item})` }"
      @click="currentIndex = index"
    >
      girl{{ item.slice(0, 1) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import "./index.less";
import { ref, type Ref } from "vue";

const imageURL: string =
  "https://www.eveningwater.com/my-web-projects/js/26/img/";
const imageItems: Array<string> = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];
const currentIndex: Ref<number> = ref(0);
</script>

<style scoped lang="less"></style>
