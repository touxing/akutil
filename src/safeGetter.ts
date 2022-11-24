import { AnyObject } from '../types'
import isObject from './isObject'

/**
 * 安全获取对象属性，不存在的对象不会报异常
 * @param {Object} obj 目标字对象
 * @param {string} key 点字符串，eg: 'key1.key2'
 * @returns 获取对象属性值，不存在返回undefined
 */
export function safeGetter(obj: AnyObject, key: string) {
  if (!isObject(obj)) return obj
  let result: any
  let keyArr = key.split('.')
  for (let i = 0, len = key.length; i < len; i++) {
    if (typeof result[keyArr[i]] !== 'undefined') {
      result = result[keyArr[i]]
    } else {
      break
    }
  }
  return result
}
