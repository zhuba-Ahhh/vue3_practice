var chnNumChar = {
  零: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
};

var chnNameValue = {
  十: {
    value: 10,
    secUnit: false
  },
  百: {
    value: 100,
    secUnit: false
  },
  千: {
    value: 1000,
    secUnit: false
  },
  万: {
    value: 10000,
    secUnit: true
  },
  亿: {
    value: 100000000,
    secUnit: true
  }
}

function SectionToChinese(section) {
  var strIns = '',
    chnStr = '';
  var unitPos = 0;
  var zero = true;
  while (section > 0) {
    var v = section % 10;
    if (v === 0) {
      if (!zero) {
        zero = true;
        chnStr = chnNumChar[v] + chnStr;
      }
    } else {
      zero = false;
      strIns = chnNumChar[v];
      strIns += chnUnitChar[unitPos];
      chnStr = strIns + chnStr;
    }
    unitPos++;
    section = Math.floor(section / 10);
  }
  return chnStr;
}

function NumberToChinese(num) {
  var unitPos = 0;
  var strIns = '',
    chnStr = '';
  var needZero = false;

  if (num === 0) {
    return chnNumChar[0];
  }

  while (num > 0) {
    var section = num % 10000;
    if (needZero) {
      chnStr = chnNumChar[0] + chnStr;
    }
    strIns = SectionToChinese(section);
    strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
    chnStr = strIns + chnStr;
    needZero = (section < 1000) && (section > 0);
    num = Math.floor(num / 10000);
    unitPos++;
  }

  return chnStr;
}

NumberToChinese(1010101);