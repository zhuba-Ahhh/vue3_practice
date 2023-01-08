function zhDigitToArabic(digit) {
  const zh = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const unit = ['千', '百', '十'];
  const quot = ['万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祗', '那由他', '不可思议', '无量', '大数'];
  let result = 0,
    quotFlag;

  for (let i = digit.length - 1; i >= 0; i--) {
    if (zh.indexOf(digit[i]) > -1) { // 数字
      if (quotFlag) {
        result += quotFlag * getNumber(digit[i]);
      } else {
        result += getNumber(digit[i]);
      }
    } else if (unit.indexOf(digit[i]) > -1) { // 十分位
      if (quotFlag) {
        result += quotFlag * getUnit(digit[i]) * getNumber(digit[i - 1]);
      } else {
        result += getUnit(digit[i]) * getNumber(digit[i - 1]);
      }
      --i;
    } else if (quot.indexOf(digit[i]) > -1) { // 万分位
      if (unit.indexOf(digit[i - 1]) > -1) {
        if (getNumber(digit[i - 1])) {
          result += getQuot(digit[i]) * getNumber(digit[i - 1]);
        } else {
          result += getQuot(digit[i]) * getUnit(digit[i - 1]) * getNumber(digit[i - 2]);
          quotFlag = getQuot(digit[i]);
          --i;
        }
      } else {
        result += getQuot(digit[i]) * getNumber(digit[i - 1]);
        quotFlag = getQuot(digit[i]);
      }
      --i;
    }
  }

  return result;

  // 返回中文大写数字对应的阿拉伯数字
  function getNumber(num) {
    for (let i = 0; i < zh.length; i++) {
      if (zh[i] == num) {
        return i;
      }
    }
  }

  // 取单位
  function getUnit(num) {
    for (let i = unit.length; i > 0; i--) {
      if (num == unit[i - 1]) {
        return Math.pow(10, 4 - i);
      }
    }
  }

  // 取分段
  function getQuot(q) {
    for (var i = 0; i < quot.length; i++) {
      if (q == quot[i]) {
        return Math.pow(10, (i + 1) * 4);
      }
    }
  }
}

console.log(zhDigitToArabic(110));