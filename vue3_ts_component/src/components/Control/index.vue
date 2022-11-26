<template>
  <div class="Control">
    <div class="switch">
      <span>Switch</span>
      <br /><br />
      <Switch type="primary"></Switch>
      <Switch type="success"></Switch>
      <Switch type="warning"></Switch>
      <Switch type="danger"></Switch>
      <Switch type="basis"></Switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from "./Switch/index.vue";
import "./control.scss";
</script>

<style scoped></style>
