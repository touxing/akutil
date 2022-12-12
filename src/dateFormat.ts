if (!String.prototype.repeat) {
  String.prototype.repeat = function (count: number, seperator: string = '') {
    var a = new Array(count)
    for (var i = 0; i < count; i++) {
      a[i] = this
    }
    return a.join(seperator)
  }
}

let week = {
  '0': '星期日',
  '1': '星期一',
  '2': '星期二',
  '3': '星期三',
  '4': '星期四',
  '5': '星期五',
  '6': '星期六',
}

type weekMap = keyof typeof week

/**
 * 扩展Data原型方法，添加格式化时间方法 `format`
 * @example
 * // 对Date的扩展，将 Date 转化为指定格式的String
 * // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位
 * // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * // 星期 1个占位符
 * ```ts
 * // (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 * // (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
 * ```
 */
export function extendDate() {
  Date.prototype.format = function (fmt: string) {
    var o = {
      'y+': this.getFullYear(), // 年份
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'w+': week[this.getDay() as unknown as weekMap], // 星期
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    }
    type oMap = keyof typeof o
    for (var k in o) {
      fmt = fmt.replace(
        new RegExp('(' + k + ')'),
        function (m: string | any[]) {
          // 直接返回 o[k] 结果是 'y-M-d' '2020-12-23'，没法控制位数
          // 下面的做法是截取匹配位数
          return ('0'.repeat(m.length) + o[k as oMap]).substring(
            ('' + o[k as oMap]).length
          )
        }
      )
    }
    return fmt
  }
}

/**
 * 格式化时间
 * @param date
 * @param pattern
 * @returns 格式化的时间字符串
 */
export function formatDate(date: Date, pattern: string): string {
  var o = {
    'y+': date.getFullYear(), // 年份
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'w+': week[date.getDay() as unknown as weekMap], // 星期
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  }
  type oMap = keyof typeof o
  for (var k in o) {
    pattern = pattern.replace(
      new RegExp('(' + k + ')'),
      function (m: string | any[]) {
        // 直接返回 o[k] 结果是 'y-M-d' '2020-12-23'，没法控制位数
        // 下面的做法是截取匹配位数
        return ('0'.repeat(m.length) + o[k as oMap]).substring(
          ('' + o[k as oMap]).length
        )
      }
    )
  }
  return pattern
}
