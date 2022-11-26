<template>
  <div>Home</div>
  <hr />
  <div id="toHome">
    <router-link to="/button">Button</router-link>
    <router-link to="/table">Table</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/select">Select</router-link>
    <router-link to="/control">Control</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#toHome {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 4px 20px 0px 20px;
  }
}
</style>
