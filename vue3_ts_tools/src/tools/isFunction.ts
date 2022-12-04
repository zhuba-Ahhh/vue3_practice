// 检测是否是一个函数 避免重复写判断
export function isFunction(obj: any): boolean {
  return (
    typeof obj === "function" &&
    typeof obj.nodeType !== "number" &&
    (typeof obj.item as any) !== "function"
  );
}

export default isFunction;
