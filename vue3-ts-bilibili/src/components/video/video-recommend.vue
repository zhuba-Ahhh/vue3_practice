<template>
  <div class="list">
    <AppVideoItem v-for="item in list" :key="item.id" :video="item" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import AppVideoItem from "@/components/app/app-video-item.vue";

interface IVideoItem {
  id: number;
  imgSrc: string;
  desc: string;
  playCount: string;
  commentCount: string;
  videoSrc: string;
}

const list = ref<IVideoItem[]>([]);
axios({
  method: "get",
  url: "/recommendList",
}).then(({ data }) => {
  list.value = data.result;
});
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
