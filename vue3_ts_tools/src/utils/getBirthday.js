// http://momentjs.cn/

// 计算距离下次生日还有多少天

import moment from "moment";

export function getBirthday(Day = "3-10") {
  // 首先要获取到今年的生日
  let birthdayTime = moment().format("YYYY-") + Day; // Day:3-10
  // 通过时间戳  去判断当前的时间戳是否大于今年生日的时间戳
  if (moment().unix() >= moment(birthdayTime).unix()) {
    // 如果大于的话，那么就在今年的生日上再添加一年，已达到获取下次生日的时间
    birthdayTime = moment(birthdayTime).add(1, "y").format("YYYY-MM-DD");
  }
  // 这个直接通过计算 （下次生日的时间戳 - 当前日期的时间戳)
  let MS = moment(birthdayTime) - moment();
  return timestampToTime(MS)
}


/* 时间戳转换为时间 */
function timestampToTime(timestamp) {
  timestamp = timestamp ? timestamp : null;
  let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  // let Y = date.getFullYear() + '-';
  let Y = '';
  let M = (date.getMonth() + 1 < 10 ? date.getMonth() : date.getMonth()) + ' 个月 ';
  let D = (date.getDate() < 10 ? date.getDate() : date.getDate()) + ' 天 ';
  let h = (date.getHours() < 10 ? date.getHours() : date.getHours()) + ' 小时 ';
  let m = (date.getMinutes() < 10 ? date.getMinutes() : date.getMinutes()) + ' 分钟 ';
  let s = (date.getSeconds() < 10 ? date.getSeconds() : date.getSeconds()) + ' 秒';
  return Y + M + D + h + m + s;
}

/* 时间yyyy-MM-dd HH:mm:ss转为时间戳 */
function timeToTimestamp(time) {
  let timestamp = Date.parse(new Date(time).toString());
  //timestamp = timestamp / 1000; //时间戳为13位需除1000，时间戳为13位的话不需除1000
  // console.log(time + "的时间戳为：" + timestamp);
  return timestamp;
}

export default getBirthday;