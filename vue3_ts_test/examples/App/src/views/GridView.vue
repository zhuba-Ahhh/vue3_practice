<script setup lang="ts">
import DemoGrid from "@/components/Grid.vue";
import type { gridDate } from "@/types";
import { ref } from "vue";

const searchQuery = ref<string>("");
const gridColumns: Array<string> = ["name", "power"];
const gridData: Array<gridDate> = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];
</script>

<template>
  <div>
    <form id="search">Search <input name="query" v-model="searchQuery" /></form>
    <DemoGrid :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
    </DemoGrid>
  </div>
</template>

<style scoped></style>
