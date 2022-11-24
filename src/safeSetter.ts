import isObject from './isObject'
import { AnyObject } from '../types'

/**
 * @desc 安全设置对象属性，不存在的属性，不会报异常
 * @param {Object} obj
 * @param {string} key 点字符串，eg: 'key1.key2'
 * @param {*} value
 * @returns 对象属性值，成功返回true，失败返回false
 */
export function safeSetter(obj: AnyObject, key: string, value: any) {
  if (!isObject(obj)) return obj
  let result = obj
  let keyArr = key.split('.')
  for (let i = 0, len = keyArr.length; i < len; i++) {
    let item = keyArr[i]
    // 到达查找的key的层级，直接赋值
    if (i == len - 1) {
      result[item] = value
      break
    }
    // 存在对象继续找下一层级的key
    if (isObject(result[item])) {
      result = result[item]
    } else {
      // 不存在对象，创建空对象，在最后一层级赋值
      result = result[item] = Object.create(null)
    }
  }
  return result
}
