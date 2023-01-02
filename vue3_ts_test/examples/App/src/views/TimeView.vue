<template>
  <div>
    <label>
      Elapsed Time <progress :value="elapsed / duration"></progress
    ></label>
    <div>{{ (elapsed / 1000).toFixed(1) }}s</div>
    <div>
      Duration: <input type="range" v-model="duration" :min="min" :max="max" />
      {{ (duration / 1000).toFixed(1) }}s
    </div>
    <p class="buttonBox">
      <button @click="max--">max--</button>
      <button @click="max++">max++</button>
    </p>
    <button @click="elapsed = 0">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, type Ref } from "vue";

const duration: Ref<number> = ref(15 * 1000),
  elapsed: Ref<number> = ref(0),
  min: Ref<number> = ref(0),
  max: Ref<number> = ref(30000);

let lastTime: number = performance.now();
console.log(performance.now());
let handle: number;
const update = () => {
  const time: number = performance.now();
  elapsed.value += Math.min(time - lastTime, duration.value - elapsed.value);

  lastTime = time;
  handle = requestAnimationFrame(update);
};

update();
onUnmounted(() => {
  cancelAnimationFrame(handle);
});
</script>

<style scoped>
.elapsed-container {
  width: 300px;
}

.elapsed-bar {
  background-color: red;
  height: 10px;
}
.buttonBox > button {
  margin-right: 10px;
}
</style>
