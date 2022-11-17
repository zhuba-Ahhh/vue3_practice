import {
  str
} from './mouduleA.js'
console.log(`${str} ...`);

// 支持第三方库
import {
  createApp,
  h
} from "vue";
const App = {
  render(h) {
    return h("div", null, [h('div', null, String('Hello Vue3'))]);
  },
}
createApp(App).mount("#app");