import getTag from './.internal/getTag'
import nodeTypes from './.internal/nodeTypes'
import isObjectLike from './isObjectLike'

/* Node.js helper references. */
const nodeIsSet = nodeTypes && nodeTypes.isSet

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * isSet(new Set)
 * // => true
 *
 * isSet(new WeakSet)
 * // => false
 */
const isSet = nodeIsSet
  ? (value: any) => nodeIsSet(value)
  : (value: any) => isObjectLike(value) && getTag(value) == '[object Set]'

export default isSet
