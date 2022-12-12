/**
 * 判断是否相等
 * @param a
 * @param b
 * @returns
 */
export function defaultEqual(a: any, b: any): boolean {
  return a === b
}

/**
 * 值转成字符串
 * @param item
 * @returns
 */
export function defaultToString(item: any): string {
  if (item === null) {
    return 'null'
  } else if (item === undefined) {
    return 'undefined'
  } else if (typeof item === 'string' || item instanceof String) {
    return item + ''
  }
  return item.toString()
}
