/**
 * 判断是否 promise
 * @param v
 * @returns {boolean}
 */
export const isPromise = (v: any): boolean =>
  typeof v === 'object' && typeof v.then === 'function'
