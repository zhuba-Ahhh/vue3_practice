<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Top from "@/components/Top/index.vue";
</script>

<template>
  <header>
    <Top />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/t1">T1</RouterLink>
      <RouterLink to="/t2">T2</RouterLink>
      <RouterLink to="/t3">T3</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="less">
a {
  margin-left: 5px;
}
</style>
