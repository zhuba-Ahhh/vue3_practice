<template>
  <div>
    <select v-model="flightType">
      <option value="one-way flight">One-way flight</option>
      <option value="return flight">Return Flight</option>
    </select>

    <input type="date" v-model="departureDate" /><input
      type="date"
      v-model="returnDate"
      :disabled="!isReturn"
    />
    <button :disabled="!canBook" @click="book">Book</button>
    <p>{{ canBook ? "" : "Return date must be after departure date." }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const flightType = ref<string>("one-way flight"),
  departureDate = ref<string>(dateToString(new Date())),
  returnDate = ref<string>(departureDate.value);

const isReturn = computed(() => flightType.value === "return flight");

const canBook = computed(
  () =>
    !isReturn.value ||
    stringToDate(returnDate.value) > stringToDate(departureDate.value)
);

const book = () => {
  alert(
    isReturn.value
      ? `You have booked a return flight leaving on ${departureDate.value} and returning on ${returnDate.value}.`
      : `You have booked a one-way flight leaving on ${departureDate.value}.`
  );
};

function pad(n: number, s = String(n)): string {
  return s.length < 2 ? `0${s}` : s;
}

const stringToDate = (str: string) => {
  const [y, m, d] = str.split("-");
  return new Date(+y, +m - 1, +d);
};
function dateToString(date: Date): string {
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate())
  );
}
</script>

<style scoped>
select,
input,
button {
  display: block;
  margin: 0.5em 0;
  font-size: 15px;
}

input[disabled] {
  color: #999;
}

p {
  color: red;
}
</style>
