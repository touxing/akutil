const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value: unknown): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

const typeMap = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
  '[object Undefined]': 'undefined',
  '[object Null]': 'null',
  '[object Object]': 'object',
  '[object Map]': 'map',
  '[object set]': 'set',
}

type nativeType = keyof typeof typeMap

/**
 * Gets the `toString` types as human semantization
 * @private
 * @param obj
 * @returns {string} Returns the `type`
 */
export function typeOf(obj: unknown): string {
  return typeMap[toString.call(obj) as nativeType]
}

export default getTag
