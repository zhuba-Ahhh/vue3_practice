// 将 RGB 转换为十六进制
export function changeColorHex(
  r: number = 0,
  g: number = 0,
  b: number = 0
): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// getColorFun(178, 232, 55) // 这里输出的是 #b2e837

export function changeColorRgb(color: string): string {
  // 输入为 #b2e837 b2e837 均可
  // 16进制颜色值的正则
  if (color.charAt(0) != "#") color = "#" + color;
  let reg: RegExp = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 把颜色值变成小写
  color = color.toLowerCase();
  if (reg.test(color)) {
    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
    if (color.length === 4) {
      let colorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    // 处理六位的颜色值，转为RGB
    const colorChange: Array<number> = [];
    for (let i: number = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
    }
    return colorChange.join(",");
  } else {
    return color;
  }
}

export default {
  changeColorHex,
  changeColorRgb,
};
