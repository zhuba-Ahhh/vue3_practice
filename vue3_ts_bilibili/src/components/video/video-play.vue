<template>
  <div class="video-play">
    <video
      controls
      class="video"
      :poster="videoInfo.poster"
      :src="videoInfo.videoSrc"
    ></video>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import type { PropType } from "vue";
import type { IVideoInfo } from "@/components/video/types";

defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.video-play {
  background-color: #000;
  .video {
    width: 100%;
    min-height: 210px;
  }
}
</style>
