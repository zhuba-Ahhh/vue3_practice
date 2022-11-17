<template>
  <SearchTop :val="val" />
  <ImgMain :isShow="show" />
</template>

<script setup lang="ts">
import SearchTop from "@/components/Search/SearchTop.vue";
import ImgMain from "@/components/Search/ImgMain.vue";
import axios from "axios";
import { reactive, ref } from "vue";
interface list {
  list?: any;
}
const val = ref("");
const show = ref(false);
const hotWord = reactive<list>({});
axios({
  url: "/api/main/hotword",
  method: "get",
}).then((res) => {
  hotWord.list = res.data.list;
  show.value = true;
});
let max = 10,
  min = 1;
const randomVal = Math.floor(Math.random() * (max - min + 1)) + min;
// val.value = hotWord.list[randomVal].keyword;
console.log(hotWord);
</script>

<style scoped></style>
