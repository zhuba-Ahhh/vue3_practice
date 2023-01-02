<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">Reverse Message</button>
    <button @click="message += '!'">Append "!"</button>
    <a href="https://vuejs.org" @click.prevent="notify">
      A link with e.preventDefault()
    </a>
    <p>
      <span :title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </span>
    </p>
    <p :class="{ red: isRed }" @click="toggleRed">
      This should be red... but click me to toggle it.
    </p>
    <p :style="{ color }" @click="toggleColor">
      This should be green, and should toggle between green and blue on click.
    </p>

    <button @click="show = !show">Toggle List</button>
    <button @click="list.push(list.length + 1)">Push Number</button>
    <button @click="list.pop()">Pop Number</button>
    <button @click="list.reverse()">Reverse List</button>

    <ul v-if="show && list.length">
      <li v-for="item of list">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">List is not empty, but hidden.</p>
    <p v-else>List is empty.</p>

    <ol>
      <TodoItem
        v-for="item in groceryList"
        :todo="item"
        :key="item.id"
      ></TodoItem>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoItem from "@/components/ToDoItem.vue";
import type { todoType } from "@/types";

const message = ref<string>("Hello World!"),
  isRed = ref<boolean>(true),
  color = ref<string>("green"),
  show = ref<boolean>(true),
  list = ref<Array<number>>([1, 2, 3]);

const groceryList = ref<Array<todoType>>([
  { id: 0, text: "Vegetables" },
  { id: 1, text: "Cheese" },
  { id: 2, text: "Whatever else humans are supposed to eat" },
]);

function reverseMessage() {
  message.value = message.value.split("").reverse().join("");
}
function notify() {
  alert("navigation was prevented.");
}

function toggleRed() {
  isRed.value = !isRed.value;
}

function toggleColor() {
  color.value = color.value === "green" ? "blue" : "green";
}
</script>

<style scoped>
button,
a {
  display: block;
  margin-bottom: 1em;
}
.red {
  color: red;
}
</style>
