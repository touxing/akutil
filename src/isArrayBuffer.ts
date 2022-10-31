import getTag from './.internal/getTag'
import isObjectLike from './isObjectLike'
import nodeTypes from './.internal/nodeTypes'

/* Node.js helper references. */
const nodeIsArrayBuffer = nodeTypes && nodeTypes.isArrayBuffer

/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 *
 * isArrayBuffer(new Array(2))
 * // => false
 */
const isArrayBuffer = nodeIsArrayBuffer
  ? (value: any) => nodeIsArrayBuffer(value)
  : (value: any) =>
      isObjectLike(value) && getTag(value) == '[object ArrayBuffer]'

export default isArrayBuffer
