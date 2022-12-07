<template>
  <div>
    R:<input type="text" v-model="r" /> G:<input type="text" v-model="g" />
    B:<input type="text" v-model="b" /> RGB:{{ rgb }}
    <h2>changeColorHex:{{ colorHex }}</h2>
    <h2>changeColorRgb:{{ colorRgb }}</h2>
    <h2>isFunction:{{ flag }}</h2>
    <div>
      <h2>正则校验：</h2>
      <p>
        邮箱：
        <input type="text" v-model="email" placeholder="3477826311@qq.com" />
        regEmail：{{ emailCheck }}
      </p>
      <p>
        日期：
        <input
          type="text"
          v-model="date"
          placeholder="2022-12-6 | 2022-01-06"
        />
        regDate：{{ dateCheck }}
      </p>
      <p>
        QQ：<input type="text" v-model="qq" placeholder="3477826311" /> regQQ:
        {{ qqCheck }}
      </p>
      <p>
        Phone：<input type="text" v-model="phone" placeholder="18175744945" />
        regPhone:
        {{ phoneCheck }}
      </p>
      <p>
        自定义：
        <input
          type="text"
          v-model="reg"
          placeholder="reg格式如:/1[3-9]\d{9}/gm"
        />
        <input type="text" v-model="test" placeholder="待测试样例" />
        Reg {{ reg }}:
        {{ regTest }}
      </p>
    </div>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// import isFunction from "@/utils/isFunction.js";
import isFunction from "@/tools/isFunction";
// import { changeColorHex, changeColorRgb } from "@/utils/changeColor.js";
import { changeColorHex, changeColorRgb } from "@/tools/changeColor";
import {
  regEmail,
  regDate,
  regQQ,
  regPhone,
  Reg,
} from "@/utils/regularityCheck.js";
// import { regEmail } from "@/tools/regularityCheck";
let r = ref(0),
  g = ref(0),
  b = ref(0),
  email = ref(""),
  date = ref(""),
  qq = ref(""),
  phone = ref(""),
  reg = ref(""),
  test = ref("");

let colorHex = computed(() => changeColorHex(r.value, g.value, b.value));
let colorRgb = computed(() => changeColorRgb(colorHex.value));
let rgb = computed(() => r.value + "," + g.value + "," + b.value);
let flag: boolean = isFunction(changeColorHex);
let emailCheck = computed(() => regEmail(email.value));
let dateCheck = computed(() => regDate(date.value));
let qqCheck = computed(() => regQQ(qq.value));
let phoneCheck = computed(() => regPhone(phone.value));
let regTest = computed(() => Reg(test.value, new RegExp(reg.value)));
</script>

<style scoped></style>
