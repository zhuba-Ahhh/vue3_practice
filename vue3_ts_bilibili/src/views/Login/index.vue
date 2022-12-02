<template>
  <LoginHeader />
  <LoginMain />
</template>

<script lang="ts" setup>
import LoginHeader from "@/components/login/Login-header.vue";
import LoginMain from "@/components/login/Login-Main.vue";
</script>

<style scoped>
:global(body) {
  height: 100vh;
  background: #f4f4f4;
}
</style>
