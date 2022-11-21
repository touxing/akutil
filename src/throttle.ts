/**
 * 节流函数
 * @param {Function} fn
 * @param {Number} wait
 * @param {Boolean} immediate 是否立即触发函数
 * @returns Function
 */
export const throttle = (
  fn: Function,
  wait: number = 300,
  immediate = false
) => {
  let inThrottle = !immediate,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number
  return function (this: any) {
    const context = this,
      args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime > wait) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(wait - (Date.now() - lastTime), 0))
    }
  }
}
