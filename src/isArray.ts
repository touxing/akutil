import getTag from './.internal/getTag'

/**
 * 是否数组类型
 * @param value
 * @returns
 */
function isArray(value: any): boolean {
  return getTag(value) === '[object Array]'
}

export default isArray
