export function test(str) {
  const reg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/gm;
  return Boolean(str.search(reg) != -1)
}