import { defaultToString } from './util'

interface Itable {
  [index: string]: any
}

class ValuePair {
  key: any
  value: any
  constructor(key: any, value: any) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}
export class Dictionary {
  toStrFn: (item: any) => string
  table: Itable
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  /**
   * 字典中是否存在key
   * @param key
   * @returns if has return true, else return false
   */
  hasKey(key: any): boolean {
    return this.table[this.toStrFn(key)] != null
  }

  /**
   * 向字典中添加新元素。如果key已存在，则会覆盖已存在的值。
   * @param key
   * @param value
   */
  set(key: any, value: any): boolean {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  /**
   * 获取key对应的值
   * @param key
   */
  get(key: any): any {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  /**
   * 移除字典中key对应的数据值
   * @param key
   */
  remove(key: any): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
  /**
   * 清空字典
   */
  clear() {
    this.table = {}
  }
  size(): number {
    return Object.keys(this.table).length
  }
  /**
   * 字典是否为空
   */
  isEmpty(): boolean {
    return this.size() === 0
  }
  /**
   * 以数组形式返回字典中所有key值
   * @returns {Array}
   */
  keys(): Array<any> {
    return this.keyValues().map((valuePair) => valuePair.key)
  }

  /**
   * 以数组形式返回字典中所有value值
   */
  values(): Array<any> {
    return this.keyValues().map((valuePair) => valuePair.value)
  }
  /**
   * 以数组形式返回字典中所有[valuePair]的值
   * @returns
   */
  keyValues(): Array<any> {
    return Object.values(this.table)
  }
  /**
   * 迭代字典中所有的键值对
   * @param {Function} callbackFn
   */
  forEach(callbackFn: (key: any, value?: any, index?: number) => any): void {
    const valuePair = this.keyValues()
    for (let i = 0, len = valuePair.length; i < len; i++) {
      const result = callbackFn(valuePair[i].key, valuePair[i].value, i)
      // 巧妙，外层调用forEach方法中，返回 false，达到 break 中断循环的目的
      if (result === false) {
        break
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePair = this.keyValues()
    let objString = `${valuePair[0].toString()}`
    for (let i = 1, len = valuePair.length; i < len; i++) {
      objString = `${objString}, ${valuePair[i].toString()}`
    }
    return objString
  }
}
