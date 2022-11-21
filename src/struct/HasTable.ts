import { LinkedList } from './LinkedList'
import { defaultToString } from './util'

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

interface Itable {
  [index: string]: any
}
export class HashTable {
  toStrFn: (item: any) => string
  table: Itable
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  size(): number {
    return Object.keys(this.table).length
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
  /**
   * 向散列表增加一个新的项，相同的key值会覆盖更新
   * 分离链接法解决hahs冲突
   * @param key
   * @param value
   * @returns
   */
  put(key: any, value: any): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()
      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }
  /**
   * 返回根据键值索引到的特定的值
   * @param key
   * @returns
   */
  get(key: any) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.key === key) {
          return current
        }
        current = current.next
      }
    }
    return
  }
  /**
   * 根据键值从散列表中移除值
   * @param key
   * @returns
   */
  remove(key: any) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.key === key) {
          linkedList.remove(current)
          if (linkedList.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{ ${keys[0]} => ${this.table[keys[0]].toString()} }`
    for (let i = 2, len = keys.length; i < len; i++) {
      objString = `${objString}, {${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`
    }
    return objString
  }
  /**
   * lose lose 散列函数
   * @param key
   * @returns
   */
  loseloseHashTableCode(key: any): number {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0, len = tableKey.length; i < len; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }
  /**
   * djb2 散列函数，更好
   * @param key
   */
  djb2HashCode(key: any) {
    const tableKey = this.toStrFn(key)
    let hash = 5381
    for (let i = 0, len = tableKey.length; i < len; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }
  hashCode(key: any): number {
    return this.djb2HashCode(key)
  }
}

/**
 * 分离链接法解决hash冲突
 */
class HashTableSeparateChaining {
  toStrFn: (item: any) => string
  table: Itable
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
}
/**
 * 线性探查解决hash冲突实现HashTable
 */
export class HashTableLinearProbing extends HashTable {
  table: Itable
  constructor() {
    super()
    this.table = {}
  }
  put(key: any, value: any) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        // 其他语言需要注意，散列表数组大小是有限制的
        // 到达临界值，需要手动扩容
        // JavaScript中的数组实现扩容是内置功能实现
        while (this.table[position] != null) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }
  get(key: any) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[index].value
      }
    }
  }
  remove(key: any) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
      }
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index)
      }
      return true
    }
    return false
  }
  /**
   * 删除项后，删除空项位置，更新冲突项的位置
   * @param key
   * @param position
   */
  verifyRemoveSideEffect(key: any, removedPosition: number) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }
}
