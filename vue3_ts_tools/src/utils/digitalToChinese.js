// 将阿拉伯数字（不包含小数）转换成中文数字
export function digitalToChinese(money = 0) {
  const cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  const cnIntRadice = new Array('', '拾', '佰', '仟');
  const cnIntUnits = new Array('', '万', '亿', '兆');
  const maxNum = 999999999999999;
  let integerNum, chineseStr = '';
  if (money === '') return '';
  if (money == 0) return cnNums[0];
  money = parseInt(money);
  if (money >= maxNum) return '';
  if (money == 0) return cnNums[0];
  money = money.toString();
  integerNum = money;
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substring(i, 1),
        p = IntLen - i - 1,
        q = p / 4,
        m = p % 4;
      if (n == '0') zeroCount++;
      else {
        if (zeroCount > 0) chineseStr += cnNums[0];
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) chineseStr += cnIntUnits[q];
    }
  }
  return chineseStr;
}

export default digitalToChinese;