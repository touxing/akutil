interface SetContainerType {
  [index: string]: any
}

export class Set {
  protected items: SetContainerType
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

  /**
   * clear all element
   * @returns void
   */
  clear() {
    this.items = {}
  }

  /**
   * 并集运算
   * @param otherSet
   * @returns {Set} 并集运算后的集合
   */
  union(otherSet: Set): Set {
    const unionSet = new Set()
    this.values().forEach((value) => unionSet.add(value))
    otherSet.values().forEach((value) => unionSet.add(value))
    return unionSet
  }

  /**
   * 交集运算
   * @param {Set} otherSet
   * @returns 交集
   */
  intersection(otherSet: Set): Set {
    const intersectionSet = new Set()
    let biggerSet = this
    let smallerSet = otherSet
    if (otherSet.size() - this.size() > 0) {
      biggerSet = this
      smallerSet = otherSet
    }
    smallerSet.values().forEach((value) => {
      if (biggerSet.has(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }

  /**
   * 差集运算
   * @param {Set} otherSet
   * @returns 差集
   */
  difference(otherSet: Set): Set {
    const differenceSet = new Set()
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })

    return differenceSet
  }

  /**
   * 判断是否子集
   * @param {Set} otherSet
   * @returns if 子集 return true, else return false
   */
  isSubsetOf(otherSet: Set): boolean {
    // 集合数量比判断的集集多，肯定不是子集
    if (this.size() > otherSet.size()) return false

    let isSubset = true
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })

    return isSubset
  }
}
