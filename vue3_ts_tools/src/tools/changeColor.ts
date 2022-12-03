// 将 RGB 转换为十六进制
export function getColorFun(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// getColorFun(178, 232, 55) // 这里输出的是 #b2e837
export default getColorFun;
