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
  put(key: any, value: any): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }
  remove(key: any) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
  get(key: any) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{ ${keys[0]} => ${this.table[keys[0]].toString()} }`
    for (let i = 2, len = keys.length; i < len; i++) {
      objString = `${objString}, {${keys[i]} => ${
        this.table[keys[i]].toString()
      }}`
    }
    return objString
  }
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

  hashCode(key: any): number {
    return this.loseloseHashTableCode(key)
  }
}
