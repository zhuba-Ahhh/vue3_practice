// const {
//   reactive,
//   effect
// } = require('@vue/reactivity');
import {
  reactive,
  effectWatch
} from './core/reactivity/index.js';
import {
  h
} from './core/h.js';


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
  // console.log(b);
})
// 响应式对象的值发生改变后
a.value += 10;


export default {
  // template => render
  render(context) {
    // 构建 view = b
    // effectWatch(() => {
    //   // 每次都需要重新创建DOM并渲染
    //   // 相当于每次都需要重新推翻重头干 效率低
    //   // 所以要计算出最小的更新点  => vdo
    //   // js => diff

    //   // reset 重置 -append-
    //   document.body.innerText = ``;

    //   const div = document.createElement("div");
    //   div.innerText = context.state.count;

    //   // root
    //   document.body.append(div);
    // });

    // // 抽离
    // const div = document.createElement("div");
    // div.innerText = context.state.count;
    // return div;

    // reset tag props children 可再次抽离到h.js
    // 标签 数据 子节点
    // 再次抽离
    return h("div", {
        id: 8,
        class: 'class'
      },
      // String(context.state.count)
      [
        h("p", null, 'caicai'),
        h("p", null, 'xuxu'),
        h("p", null, 'kunkun'),
        h("p", null, String(context.state.count))
      ]
    );
  },
  setup() {
    // a ==> 响应式数据
    const state = reactive({
      count: 0,
    });
    window.state = state;
    return {
      state
    };
  },
}

// 抽离出来 export default 中即是App
// App.render(App.setup());