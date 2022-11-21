// n1 oldVnode
// n2 oldVnode
// diff 比较虚拟DOM
export function diff(n1, n2) {

  // 1. tag
  if (n1.tag !== n2.tag) {
    n1.el.replaceWith(document.createElement(n2.tag));
    //
  } else {
    // 小细节
    const el = (n2.el = n1.el);
    // 2. props
    // new: {id: "foo", class: "bar", a: "a"}
    // old: {id: "foo", class: "bar1", b: "b"}

    const {
      props: oldProps
    } = n1;
    const {
      props: newProps
    } = n2;

    if (newProps && oldProps) {
      Object.keys(newProps).forEach(key => {
        const oldVal = newProps[key];
        const newVal = oldProps[key];
        if (oldVal !== newVal) {
          el.setAttribute(key, newVal);
        }
      })
    }

    if (oldProps) {
      Object.keys(oldProps).forEach(key => {
        if (!newProps[key]) {
          el.removeAttribute(key);
        }
      })
    }
  }

  // 3. children => (暴力解法) 可优化
  // 四种情况
  // 1. newChildren => string (oldChildren => string, oldChildren => array)
  // 2. newChildren => array (oldChildren => string, oldChildren => array)
  const {
    children: newChildren = []
  } = n2;
  const {
    children: oldChildren = []
  } = n2;

  if (typeof newChildren === 'string') {
    if (typeof oldChildren === 'string') {
      if (newChildren !== oldChildren) {
        el.textContent = newChildren; // 都是字符串直接替换
      }
    } else if (Array.isArray(oldChildren)) {
      el.textContent = newChildren;
    }
  } else if (Array.isArray(newChildren)) {
    if (typeof oldChildren === 'string') {
      el.el.innerText = ``;
      mountElement(n2, el);
    } else if (Array.isArray(oldChildren)) {
      // 都是数组
      // new {a, b, c}
      // old {a, b, c}
      // 比较替换

      const length = Math.min(newChildren.length, oldChildren.length);

      // 处理公共的Vnode
      for (let index = 0; index < length; i++) {
        const newVnode = newChildren[index];
        const oldVnode = oldChildren[index];
        diff(oldVnode, newVnode); // 递归diff比较处理
      }

      if (newChildren.length > length) {
        // 创建节点
        for (let index = length; index < newChildren.length; index++) {
          const newVnode = newChildren[index];
          mountElement(newVnode);
        }
      }

      if (oldChildren.length > length) {
        // 删除节点
        for (let index = length; index < oldChildren.length; index++) {
          const oldVnode = oldChildren[index];
          oldVnode.el.parent.remove(oldVnode.el);
        }
      }
    }
  }
}





// vdom => DOM
export function mountElement(vnode, container) {
  // tag props children
  const {
    tag,
    props,
    children
  } = vnode;

  // tag
  const el = (vnode.el = document.createElement(tag));
  // props
  if (props) {
    for (const key in props) {
      const val = props[key];
      el.setAttribute(key, val);
    }
  }
  // children
  // 1. 可以接受字符串
  if (typeof children === 'string') {
    const textNode = document.createTextNode(children);
    el.append(textNode);
  }
  // 2. 可以接受数组 递归方法
  else if (Array.isArray(children)) {
    children.forEach(v => {
      mountElement(v, el);
    })
  }

  container.append(el);
}