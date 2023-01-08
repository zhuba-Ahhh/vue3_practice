function convertCurrency(money) {
  let cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  let cnIntRadice = new Array('', '拾', '佰', '仟');
  let cnIntUnits = new Array('', '万', '亿', '兆');
  let maxNum = 999999999999999;
  let integerNum;
  let chineseStr = '';
  if (money == '') {
    return '';
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    return '';
  }
  if (money == 0)
    return cnNums[0];
  money = money.toString();
  integerNum = money;
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1);
      let p = IntLen - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
  }
  return chineseStr;
}