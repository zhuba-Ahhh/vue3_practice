// 响应式库

// 依赖
let currentEffect;
class Dep {
  // 1. 收集依赖
  constructor(val) {
    // es6+
    this.effects = new Set();
    this._val = val;
  }

  get value() {
    this.depend();
    return this._val;
  }
  set value(newVal) {
    this._val = newVal;
    this.notice();
  }


  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  // 2. 触发依赖
  notice() {
    // 触发一下之前收集到的依赖
    this.effects.forEach(effect => effect())
  }
}

export function effectWatch(effect) {
  // 收集依赖
  currentEffect = effect;
  effect();
  // dep.depend();
  currentEffect = null;
}

// // 类似于ref
// let a = 10;
// const dep = new Dep(a);
// let b;

// effectWatch(() => {
//   console.log("收集依赖完成");
//   b = dep.value + 10;
//   console.log(b);
// })

// // 值发生改变
// dep.value = 20;
// // dep.notice();

// => 20 / 30 // 初始化打印一次20 数据更新打印一次30


// react
// dep => ref number string
// object => key => dep

// 1. 这个对象什么时候改变的
// object.a = get
// objext.a = 2 => set

// vue2
// proxy

const targetMap = new Map();

// 获取得到dep
function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}


export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // console.log("target:", target, "key:", key);

      // key -- dep 一一对应
      // dep存储在
      // 一同提出一同使用 return target[key]

      const dep = getDep(target, key);
      // 依赖收集
      dep.depend();
      return Reflect.get(target, key);
    },

    set(target, key, value) {
      // 触发依赖
      // 要获取得到dep
      const dep = getDep(target, key);
      const result = Reflect.set(target, key, value);
      dep.notice();
      return result;
    }
  })
}

// const user = reactive({
//   age: 19,
// })

// let double;
// effectWatch(() => {
//   console.log("--reactive--");
//   double = user.age;
//   console.log(double);
// })

// user.age = 20;

// --reactive--
// target: { age: 19 } key: age
// 19
// --reactive--
// target: { age: 20 } key: age
// 20