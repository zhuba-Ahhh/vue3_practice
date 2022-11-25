<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div id="to">
    <router-link to="/">Home</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/table">Table</router-link>
  </div>
  <router-view />
</template>
