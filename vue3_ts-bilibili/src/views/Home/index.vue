<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播组件 -->
  <HomeSwipe />
  <!-- 视频列表 -->
  <HomeVideoList />
</template>

<script setup lang="ts">
import AppHeader from "@/components/app/app-header.vue";
import HomeChannel from "@/components/home/home-channel.vue";
import HomeSwipe from "@/components/home/home-swipe.vue";
import HomeVideoList from "@/components/home/home-video-list.vue";
</script>
