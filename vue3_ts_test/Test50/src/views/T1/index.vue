<template>
  <div class="body">
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
import { ref } from "vue";

const imageURL = "https://www.eveningwater.com/my-web-projects/js/26/img/";
const imageItems = ["1.jpg", "2.jpg", "3.jpg", "6.jpg", "7.jpg", "8.jpg"];
const currentIndex = ref(0);
</script>

<style scoped lang="less"></style>
