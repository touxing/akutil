/**
 * 是否 promise 类型
 * @param v
 * @returns {boolean}
 */
export const isPromise = (v: any): boolean =>
  typeof v === 'object' && typeof v.then === 'function'
