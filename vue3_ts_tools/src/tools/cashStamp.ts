// 将阿拉伯数字（包含小数）转换成现金
export function cashStamp(money: string | number = ""): string {
  const cnNums: Array<string> = new Array(
    "零",
    "壹",
    "贰",
    "叁",
    "肆",
    "伍",
    "陆",
    "柒",
    "捌",
    "玖"
  );
  const cnIntRadice: Array<string> = new Array("", "拾", "佰", "仟");
  const cnIntUnits: Array<string> = new Array("", "万", "亿", "兆");
  const cnDecUnits: Array<string> = new Array("角", "分", "毫", "厘");
  const cnInteger: string = "整";
  const cnIntLast: string = "元";
  const maxNum: number = 999999999999999.9999;
  let integerNum: string,
    decimalNum: string,
    parts: Array<string>,
    chineseStr: string = "";
  if (money === "") return "";
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  if (typeof money == "string") money = parseFloat(money);
  if (money >= maxNum) return "";
  money = money.toString();
  if (money.indexOf(".") == -1) {
    integerNum = money;
    decimalNum = "";
  } else {
    parts = money.split(".");
    integerNum = parts[0];
    decimalNum = parts[1].substring(0, 4);
  }
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0,
      IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substring(i, 1),
        p = IntLen - i - 1,
        q = p / 4,
        m = p % 4;
      if (n == "0") zeroCount++;
      else {
        if (zeroCount > 0) chineseStr += cnNums[0];
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) chineseStr += cnIntUnits[q];
    }
    chineseStr += cnIntLast;
  }
  if (decimalNum != "") {
    let decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substring(i, 1);
      if (n != "0") chineseStr += cnNums[Number(n)] + cnDecUnits[i];
    }
  }
  if (chineseStr == "") chineseStr += cnNums[0] + cnIntLast + cnInteger;
  else if (decimalNum == "") chineseStr += cnInteger;
  return chineseStr;
}

export default cashStamp;
