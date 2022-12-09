import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const localCount = Number(localStorage.getItem("count")) | 0;
  const count: Ref<number> = ref(localCount);
  const counter: Ref<number> = ref(1);
  const doubleCount: Ref<number> = computed(() => count.value * 2);
  function increment(): void {
    count.value += counter.value;
    localStorage.setItem("count", "" + count.value);
  }
  function subtract(): void {
    count.value -= counter.value;
    localStorage.setItem("count", "" + count.value);
  }
  function setCounter(value: number): void {
    counter.value = value;
  }
  return { count, doubleCount, increment, subtract, setCounter, counter };
});

export const useTestStore = defineStore("Test", () => {
  const test: Ref<number> = ref(1);
  const testTwo: Ref<number> = computed(() => test.value * 2);
  function testAdd(): void {
    test.value++;
  }
  return { test, testTwo, testAdd };
});
