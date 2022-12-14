/**
 * 扁平化数组，递归法
 * @param arr
 * @returns
 */
export function flatten<T = any>(arr: Array<T>): Array<T> {
  if (arr.length === 0) return []
  let [first, ...rest] = arr
  if (Array.isArray(first)) {
    return [...flatten(first), ...flatten(rest)]
  }
  return [first, ...flatten(rest)]
}
