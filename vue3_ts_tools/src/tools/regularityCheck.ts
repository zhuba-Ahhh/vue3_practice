export function regEmail(email: string): boolean {
  // 邮箱校验
  const regEmail: RegExp = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/gm;
  return Reg(email, regEmail);
}

export function regDate(date: string): boolean {
  // 日期格式校验
  const regDate: RegExp =
    /^[1-9]\d{0,3}-(1[0-2]|0?[1-9])-(3[01]|[12]\d|0?[1-9])$/gm;
  return Reg(date, regDate);
}

export function regQQ(qq: string): boolean {
  // QQ格式校验
  const regQQ: RegExp = /[1-9]\d{4,11}/gm;
  return Reg(qq, regQQ);
}

export function regPhone(phone: string): boolean {
  // 手机格式校验
  const regPhone: RegExp = /1[3-9]\d{9}/gm;
  return Reg(phone, regPhone);
}

export function Reg(str: string, reg: RegExp): boolean {
  // 抽离判断
  return Boolean(str.search(reg) != -1);
}
