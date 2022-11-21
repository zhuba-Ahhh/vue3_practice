// 创建一个虚拟DOM节点 vdom vnode
export function h(tag, props, children) {
  return {
    // 这就是虚拟节点  就可以替换一个节点 // 标签 数据 子节点
    tag,
    props,
    children,
  }
}