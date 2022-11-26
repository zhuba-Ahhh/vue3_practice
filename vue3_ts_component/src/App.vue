<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div id="to">
    <router-link to="/"><span>Home</span></router-link>
    <router-link to="/button"><span>Button</span></router-link>
    <router-link to="/table"><span>Table</span></router-link>
    <router-link to="/form"><span>Form</span></router-link>
    <router-link to="/select"><span>Select</span></router-link>
    <router-link to="/control"><span>Control</span></router-link>
  </div>
  <router-view />
</template>
