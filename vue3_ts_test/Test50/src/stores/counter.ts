import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const localCount = Number(localStorage.getItem("count")) | 0;
  const count = ref(localCount);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
    localStorage.setItem("count", count.value);
  }

  return { count, doubleCount, increment };
});

export const useTestStore = defineStore("Test", () => {
  const test = ref(1);
  const testTwo = computed(() => test.value * 2);
  function testAdd() {
    test.value++;
  }
  return { test, testTwo, testAdd };
});
