interface SetType {
  [index: string]: any
}
export class Set {
  protected items: SetType
  constructor() {
    this.items = {}
  }

  /**
   *
   * @param element
   * @returns if has element return true, else return fase
   */
  has(element: any): boolean {
    // return element in this.items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  /**
   * 向集合添加一个新元素
   * @param element
   * @returns {Boolean} if add successfuly return true, else return false
   */
  add(element: any) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  /**
   * 从集合删除一个元素
   * @param element
   * @returns {Boolean} if delete successfuly return true, else return false
   */
  delete(element: any): boolean {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  /**
   * 返回集合包含元素的数量
   * @returns {Number}
   */
  size(): number {
    return Object.keys(this.items).length
  }

  sizeLegacy() {
    let count = 0
    for (let key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        count++
      }
    }
    return count
  }
  /**
   * 返回一个包含集合中所有值的数组
   * @returns {Array}
   */
  values(): Array<any> {
    return Object.values(this.items)
  }
  valuesLegacy(): Array<any> {
    let values = []
    for (let key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  clear() {
    this.items = {}
  }
}
