// 原生 Date 对象扩展
class sydate extends Date {
  // 英文周几列表
  static get WeekDayName () {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }
  // 中文周几列表
  static get WeekDayNameCn () {
    return ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  }
  // 英文周几缩写列表
  static get WeekDayAbbr () {
    return ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thur.', 'Fri.', 'Sat.']
  }
  // 中文周几缩写列表
  static get WeekDayAbbrCn () {
    return ['日', '一', '二', '三', '四', '五', '六']
  }

  // 年份, 2020
  get year () {
    return this.getFullYear()
  }
  // 实际月份, 7
  get month () {
    return this.getMonth() + 1
  }
  // 几号, 20
  get day () {
    return this.getDate()
  }
  // 是否闰年, true/false
  get isLeapYear () {
    // eslint-disable-next-line no-mixed-operators
    return parseInt(this.year) % 4 === 0 && parseInt(this.year) % 100 !== 0 || parseInt(this.year) % 400 === 0
  }

  // 一周的第几天，从0开始，周日是每周的第一天，0
  get weekDay () {
    return this.getDay()
  }
  // 英文周几
  get weekDayName () {
    return this.constructor.WeekDayName[this.weekDay]
  }
  // 中文周几
  get weekDayNameCn () {
    return this.constructor.WeekDayNameCn[this.weekDay]
  }
  // 英文周几缩写
  get weekDayAbbr () {
    return this.constructor.WeekDayAbbr[this.weekDay]
  }
  // 中文周几缩写
  get weekDayAbbrCn () {
    return sydate.WeekDayAbbrCn[this.weekDay]
  }

  // 英文几月, January
  get monthName () {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][this.month - 1]
  }
  // 英文几月缩写, Jan.
  get monthAbbr () {
    return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'][this.month - 1]
  }
  // 中文几月，一月
  get monthNameCn () {
    return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][this.month - 1]
  }

  // 一年中第几天，217
  get yday () {
    return Math.ceil((this - new Date(this.getFullYear(), 0, 1)) / 86400000) // 一天 86400000s
  }
  // 几点了 - 时钟，24小时制
  get hour () {
    return this.getHours()
  }
  // 几点了 - 时钟，12小时制
  get hour12 () {
    return this.hour % 12 > 0 ? this.hour % 12 : 12
  }
  // 几点了 - 分钟
  get min () {
    return this.getMinutes()
  }
  // 几点了 - 秒
  get sec () {
    return this.getSeconds()
  }
  // 几点了 - 毫秒
  get msec () {
    return this.getMilliseconds()
  }

  // 日初，当天的 00:00:00
  get atStartOfDate () {
    return new this.constructor(this.year, this.month - 1, this.day)
  }
  // 日末，当天的 23:59:59
  get atEndOfDate () {
    return new this.constructor(this.year, this.month - 1, this.day, 23, 59, 59)
  }
  // 周初那天的此时此刻
  get atStartOfWeek () {
    let weekDay = this.weekDay
    let totalSeconds = this.getTime() - weekDay * 86400000
    return new this.constructor(totalSeconds)
  }
  // 周末那天的此时此刻
  get atEndOfWeek () {
    let totalSeconds = this.atStartOfWeek.getTime() + 6 * 86400000
    return new this.constructor(totalSeconds)
  }
  // 月初那天的 00:00:00
  get atStartOfMonth () {
    return new this.constructor(this.year, this.month - 1, 1)
  }
  // 月末那天的 00:00:00
  get atEndOfMonth () {
    return new this.constructor(this.year, this.month, 0)
  }
  // 年初那天的 00:00:00
  get atStartOfYear () {
    return new this.constructor(this.year, 0, 1)
  }
  // 年末那天的 00:00:00
  get atEndOfYear () {
    return new this.constructor(this.year, 11, 31)
  }

  // 前一天的此时此刻
  get getPreviousDate () {
    return new this.constructor(this.getTime() - 86400000)
  }
  // 后一天的此时此刻
  get getNextDate () {
    return new this.constructor(this.getTime() + 86400000)
  }
  // 传入天数计算多少天前/后的此时此刻
  getDateTime (day = 1) {
    return new this.constructor(this.getTime() + day * 86400000)
  }

  // 格式化时间, new Date().strftime('%Y-%M-%d %H:%m:%s')
  strftime (dateFormat = '%Y-%M-%d %H:%m:%s') {
    return dateFormat
      // 2018
      .replace(/%?Y+/, () => this.year)
      // (00..99)
      .replace(/%?y+/, () => `${this.year}`.substring(2, 4))
      // (1..12)
      .replace(/%?(_M)+/, () => this.month)
      // (01..12)
      .replace(/%?M+/, () => this.month < 10 ? `0${this.month}` : this.month)
      // January, February ..
      .replace(/%?B+/, () => this.monthName)
      // Jan, Feb ...
      .replace(/%?b+/, () => this.monthAbbr)
      // (1..31)
      .replace(/%?(_d)+/, () => this.day)
      // (01..31)
      .replace(/%?d+/, () => this.day < 10 ? `0${this.day}` : this.day)
      // (0..23)
      .replace(/%?(_H)+/, () => this.hour)
      // (00..23)
      .replace(/%?H+/, () => this.hour < 10 ? `0${this.hour}` : this.hour)
      // (0..12)
      .replace(/%?(_h)+/, () => this.hour12)
      // (00..12)
      .replace(/%?h+/, () => this.hour12 < 10 ? `0${this.hour12}` : this.hour12)
      // (0..59)
      .replace(/%?(_m)+/, () => this.min)
      // (00..59)
      .replace(/%?m+/, () => this.min < 10 ? `0${this.min}` : this.min)
      // (0..59)
      .replace(/%?(_s)+/, () => this.sec)
      // (00..59)
      .replace(/%?s+/, () => this.sec < 10 ? `0${this.sec}` : this.sec)
      // PM, AM
      .replace(/%?P+/, () => this.hour > 12 ? 'PM' : 'AM')
      // pm, am
      .replace(/%?p+/, () => this.hour > 12 ? 'pm' : 'am')
      // ms
      .replace(/%?L+/, () => this.msec)
      // Sunday, Monday...
      .replace(/%?A+/, () => this.weekDayName)
      // Sun, Mon...
      .replace(/%?a+/, () => this.weekDayAbbr)
      // (1..7)
      .replace(/%?u+/, () => this.weekDay + 1)
      // (0..6)
      .replace(/%?w+/, () => this.weekDay)
  }
}

module.exports = sydate
