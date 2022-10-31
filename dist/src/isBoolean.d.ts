/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
declare function isBoolean(value: any): boolean;
export default isBoolean;
