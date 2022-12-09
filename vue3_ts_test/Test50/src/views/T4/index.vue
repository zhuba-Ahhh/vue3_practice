<template>
  <div :class="[...body]">
    <h2 class="title">Theme Clock 主题钟</h2>
    <div class="btn-group">
      <button type="button" class="btn" @click="changeMode">
        {{ modeTextContent }}
      </button>
      <button type="button" class="btn" @click="changeLang">
        {{ langTextContent }}
      </button>
    </div>
    <div class="clock-container">
      <div class="clock">
        <div class="needle hour" :style="hourStyle"></div>
        <div class="needle minute" :style="minuteStyle"></div>
        <div class="needle second" :style="secondStyle"></div>
        <div class="center-point"></div>
      </div>
      <div class="time" v-html="timeHtml"></div>
      <div class="date" v-html="dateHtml"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref, onMounted, onUnmounted } from "vue";
import "./index.less";
const scale = (
  n: number,
  inMin: number,
  inMax: number,
  outerMin: number,
  outerMax: number
): number => ((n - inMin) * (outerMax - outerMin)) / (inMax - inMin) + outerMin;
let currentLang: Ref<string> = ref("zh"),
  timer: Ref<number> = ref(0),
  modeTextContent: Ref<string> = ref("黑暗模式"),
  langTextContent: Ref<string> = ref("English"),
  timeHtml: Ref<string> = ref(""),
  dateHtml: Ref<string> = ref(`<span class="circle"></span>`),
  hourStyle: Ref<string> = ref(""),
  minuteStyle: Ref<string> = ref(""),
  secondStyle: Ref<string> = ref(""),
  amPm: Ref<string> = ref(""),
  w: Array<string> = reactive([""]),
  m: Array<string> = reactive([""]),
  body: Array<string> = reactive(["body4"]);

// 切换黑暗/明亮模式
const changeMode = (): void => {
  if (body.length > 1) {
    body.length = 1;
    modeTextContent.value = langText[currentLang.value]["mode-dark-text"];
  } else {
    body[1] = "dark";
    modeTextContent.value = langText[currentLang.value]["mode-light-text"];
  }
};
// 中英文切换
const changeLang = (): void => {
  currentLang.value = currentLang.value === "zh" ? "en" : "zh";
  // setCurrentDate();
  modeTextContent.value =
    langText[currentLang.value][
      "mode-" + (body.length > 1 ? "light" : "dark") + "-text"
    ];
  langTextContent.value =
    langText[currentLang.value === "zh" ? "en" : "zh"]["lang-text"];
};

onMounted(() => {
  const setCurrentDate = function (): void {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const time = date.getDate();
    const hour = date.getHours();
    const hourForClock = hour % 12;
    const minute = date.getMinutes();
    const second = date.getSeconds();
    amPm.value =
      hour >= 12
        ? langText[currentLang.value]["time-after-text"]
        : langText[currentLang.value]["time-before-text"];
    w = currentLang.value === "zh" ? dayZHs : days;
    m = currentLang.value === "zh" ? monthZHs : months;
    const values = [
      `translate(-50%,-100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`,
      `translate(-50%,-100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`,
      `translate(-50%,-100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`,
    ];
    [hourStyle, minuteStyle, secondStyle].forEach((item, index) => {
      item.value = "transform:" + values[index];
    });
    timeHtml.value = `${hour}:${minute >= 10 ? minute : "0" + minute}&nbsp;${
      amPm.value
    }`;
    dateHtml.value = `${w[day]},${m[month]}<span class="circle">${time}</span>${
      langText[currentLang.value]["date-day-text"]
    }`;
    timer.value = window.setTimeout(setCurrentDate, 1000);
  };
  setCurrentDate();
});

onUnmounted(() => {
  if (timer.value) clearTimeout(timer.value);
});

const langText = {
  zh: {
    "mode-dark-text": "黑暗模式",
    "mode-light-text": "明亮模式",
    "lang-text": "中文",
    "time-before-text": "上午",
    "time-after-text": "下午",
    "date-day-text": "日",
  },
  en: {
    "mode-dark-text": "dark mode",
    "mode-light-text": "light mode",
    "lang-text": "English",
    "time-before-text": "AM",
    "time-after-text": "PM",
    "date-day-text": "",
  },
};
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayZHs = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthZHs = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];
</script>

<style scoped></style>
