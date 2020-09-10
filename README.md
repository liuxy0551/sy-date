# sydate [![npm](https://img.shields.io/npm/v/sydate.svg?style=flat-square)](https://www.npmjs.com/package/sydate)

sydate 原生 Date 对象扩展，node 模块<br><br>


> 引入、使用 sydate
### Demo
```
const SyDate = require('sydate')

console.log(new SyDate().year)  // 2020
console.log(new SyDate().month) // 8
console.log(new SyDate().getNextDate.strftime()) // 2020-08-06 18:53:57
console.log(new SyDate().getDateTime(-100).strftime('%Y/%M/%d %H:%m:%s')) // 2020/04/27 18:55:05
```


### 方法

| 方法名 | 说明 | 参数 | 参数类型 | 默认值 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| getDateTime | 传入正负数计算多少天前/后的此时此刻 | day | Number | 1 | - |
| strftime | 传入 new Date() 格式化时间 | dateFormat | String | '%Y-%M-%d %H:%m:%s' | - |



#### strftime 参数说明

> 请注意大小写，% 可去除

| 格式 | 含义 | 备注 | 举例 |
| ---- | ---- | ---- | ---- |
| %Y | 四位数年份 | - | 2019 |
| %y | 两位数年份 | - | 19 |
| %M | 月份 | - | 01 |
| %_M | 月份 | 不补0 | 1 |
| %d | 日期 | - | 02 |
| %_d | 日期 | 不补0 | 2 |
| %H | 24小时制 | - | 03 |
| %_H | 24小时制 | 不补0 | 3 |
| %h | 12小时制 | - | 16点，04 |
| %_h | 12小时制 | 不补0 | 16点，4 |
| %m | 分钟 | - | 05 |
| %_m | 分钟 | 不补0 | 5 |
| %s | 秒 | - | 06 |
| %_s | 秒 | 不补0 | 6 |



### 属性

| 属性名 | 说明 | 举例 | 备注 |
| ---- | ---- | ---- | ---- |
| year | 年份 | 2020 | - |
| month | 月份 | 8 | - |
| day | 日期 | 5 | - |
| isLeapYear | 是否闰年 | true/false | - |
| weekDay | 一周的第几天，从0开始，周日是每周的第一天，0 | 3 | - |
| weekDayName | 英文周几 | Wednesday | - |
| weekDayNameCn | 中文周几 | 星期三 | - |
| weekDayAbbr | 英文周几缩写 | Wed. | - |
| weekDayAbbrCn | 中文周几缩写 | 三 | - |
| monthName | 英文几月 | August | - |
| monthAbbr | 英文几月缩写 | Aug. | - |
| monthNameCn | 中文几月 | 八月 | - |
| yday | 一年中第几天 | 218 | - |
| hour | 几点了 - 时钟，24小时制 | 18 | - |
| hour12 | 几点了 - 时钟，12小时制 | 6 | - |
| min | 几点了 - 分钟 | 6 | - |
| sec | 几点了 - 秒 | 25 | - |
| msec | 几点了 - 毫秒 | 949 | - |
| atStartOfDate | 日初，当天的 00:00:00 | - | - |
| atEndOfDate | 日末，当天的 23:59:59 | - | - |
| atStartOfWeek | 周初那天的此时此刻 | - | - |
| atEndOfWeek | 周末那天的此时此刻 | - | - |
| atStartOfMonth | 月初那天的 00:00:00 | - | - |
| atEndOfMonth | 月末那天的 00:00:00 | - | - |
| atStartOfYear | 年初那天的 00:00:00 | - | - |
| atEndOfYear | 年末那天的 00:00:00 | - | - |
| getPreviousDate | 前一天的此时此刻 | - | - |
| getNextDate | 后一天的此时此刻 | - | - |
