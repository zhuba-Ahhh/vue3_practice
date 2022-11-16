<template>
  <!-- 头部 -->
  <AppHeader />
  <!-- 视频播放 -->
  <VideoPlay :videoInfo="videoInfo" />
  <!-- 视频详情 -->
  <VideoInfo :videoInfo="videoInfo" />
  <!-- 相关推荐/评论 -->
  <VideoBottom />
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "@/components/app/app-header.vue";
import VideoPlay from "@/components/video/video-play.vue";
import VideoInfo from "@/components/video/video-info.vue";
import VideoBottom from "@/components/video/video-bottom.vue";

export interface IVideoInfo {
  author?: string;
  authorIconSrc?: string;
  commentCount?: number;
  date?: string;
  id?: string;
  poster?: string;
  playCount?: string;
  likeCount?: string;
  favCount?: string;
  videoSrc?: string;
  videoTitle?: string;
}

const videoInfo = ref<IVideoInfo>({});
const route = useRoute();

axios({
  url: "/videoDetail",
  method: "get",
  // 根据路由对象的 id 参数发送请求获取对应的视频详情
  params: { id: route.params.id },
}).then(({ data }) => {
  videoInfo.value = data.result;
});
</script>

<style lang="less" scoped>
.video-info {
  padding: 3vw 2vw;
  border-bottom: 1px solid #ddd;
  .title {
    font-size: 4vw;
    line-height: 6vw;
    margin: 3vw 0;
  }
  .author-info {
    display: flex;
    align-items: center;
    font-size: 3vw;
    color: #999;
    .author {
      flex: 1;
      .author-avatar {
        width: 5vw;
        height: 5vw;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 1vw;
        background: url(~@/assets/images/loading.png) no-repeat center #e7e7e7;
      }

      .author-name {
        color: #212121;
      }
    }
    > span {
      margin: 0 2vw;
    }
    .iconfont {
      font-size: 5vw;
      color: #757575;
      margin-right: 2vw;
    }
  }
}
</style>
