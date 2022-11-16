<template>
  <van-tabs :active="active">
    <van-tab v-for="item in List" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
interface INavItem {
  id: string;
  text: string;
}

const List = ref<INavItem[]>([]);
const active = ref(0);
axios({
  url: "/navList",
  method: "get",
}).then((res) => {
  List.value = res.data.result;
});
</script>
