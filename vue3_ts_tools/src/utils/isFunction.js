// 检测是否是一个函数 避免重复写判断
export function isFunction(obj) {
  return typeof obj === "function" &&
    typeof obj.nodeType !== "number" &&
    typeof obj.item !== "function";
};

export default isFunction;