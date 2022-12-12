/**
 * Is Defined variable
 * @param value
 * @returns if is defined variable return true, else return false
 */
export function isDef(value: any): boolean {
  return typeof value !== 'undefined'
}

/**
 * Is not defined variable
 * @param value
 * @returns if is not defined variable return true, else return false
 */
export function isUnDef(value: any): boolean {
  return typeof value === 'undefined'
}
