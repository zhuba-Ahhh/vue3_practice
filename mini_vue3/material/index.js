// const {
//   reactive,
//   effect
// } = require('@vue/reactivity');
import {
  reactive,
  effectWatch
} from './core/reactivity/index.js';

// // v1
// let a = 10,
//   b = a + 10;
// console.log(b);

// a = 20;
// b = a + 10;
// console.log(b);
// // => 20 \n 30

// // v2
// let a = 10,
//   b = a + 10;

// function updated() {
//   b = a + 10;
//   console.log(b);
// }
// console.log(b);
// a = 20;
// updated();
// // => 20 \n 30

// v3
// 数据a发生变化了，使得b自动更新
// 声明一个响应式对象
let a = reactive({
  value: 10
});
let b;
effectWatch(() => {
  b = a.value + 10;
  console.log(b);
})
// 响应式对象的值发生改变后
a.value += 10;