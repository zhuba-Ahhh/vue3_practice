export function regEmail(email) {
  // 邮箱格式校验
  const regEmail = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/gm;
  return Reg(email, regEmail);
}

export function regDate(date) {
  // 日期格式校验
  const regDate = /^[1-9]\d{0,3}-(1[0-2]|0?[1-9])-(3[01]|[12]\d|0?[1-9])$/gm;
  return Reg(date, regDate);
}

export function regQQ(qq) {
  // QQ格式校验
  const regQQ = /[1-9]\d{4,11}/gm;
  return Reg(qq, regQQ);
}

export function regPhone(phone) {
  // 手机格式校验
  const regPhone = /1[3-9]\d{9}/gm;
  return Reg(phone, regPhone);
}

export function Reg(str, reg) {
  // 抽离判断
  return Boolean(str.search(reg) != -1)
}