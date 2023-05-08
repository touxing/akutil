/**
 * LRUCache implement by Map
 * Map 数据结构实现 LRUCache
 */
export class LRUCache {
  max: number
  cache: Map<any, any>
  constructor(max = 10) {
    this.max = max
    this.cache = new Map()
  }

  get value() {
    return this.cache
  }

  /**
   * 读取缓存的值
   * @param key
   * @returns
   */
  get(key: any) {
    let item = this.cache.get(key)
    if (item !== undefined) {
      // refresh key
      this.cache.delete(key)
      this.cache.set(key, item)
    }
    return item
  }

  /**
   * 设置缓存
   * @param key
   * @param value
   */
  set(key: any, value: any) {
    // refresh key
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size === this.max) {
      // evict oldest
      this.cache.delete(this.first())
    }
    this.cache.set(key, value)
  }

  /**
   * 第一个缓存值
   * @returns
   */
  first() {
    return this.cache.keys().next().value
  }

  toString() {
    let str = `Map(${this.cache.size}) { `
    let result: string[] = []
    this.cache.forEach((value, key) => {
      result.push(`${key} => ${value}`)
    })
    str += result.join(", ") + " }"
    return str
  }

  print() {
    console.log(this.toString())
  }
}

type NodeType = Node | null
class Node {
  next: NodeType
  prev: NodeType
  constructor(public key: any, public value: any) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

/**
 * LRUCache implement by LinkedList
 * 链表实现 LRUCache
 */
export class LRUCacheLinkedList {
  size: number
  head: NodeType
  tail: NodeType
  cacheMap: Record<string, any>
  constructor(private limit = 10) {
    if (limit <= 0) throw new Error("ERROR: LRU cache number must be greater 0")

    this.limit = limit
    this.size = 0
    this.head = null
    this.tail = null
    this.cacheMap = {}
  }

  /**
   * 内部缓存的链表值
   */
  get value() {
    return this.cacheMap
  }

  /**
   * 读取缓存值
   * @param key
   * @returns
   */
  get(key: any) {
    const existingNode = this.cacheMap[key]
    if (existingNode) {
      const value = existingNode.value
      // Make the node as new Head of LinkedList if not already
      if (this.head !== existingNode) {
        // 更新 LinkedList 缓存，如果不是第一个缓存，则更新到 Head 位置，实现 LRU
        // write will automatically remove the node from it's position and make it a new head i.e most used
        this.set(key, value)
      }
      return value
    }
  }

  /**
   * 设置缓存值
   * @param key
   * @param value
   */
  set(key: any, value: any) {
    let existingNode = this.cacheMap[key]
    // 存在读取的node，移除
    if (existingNode) {
      this.detach(existingNode)
      this.size--
    } else if (this.size === this.limit) {
      // 达到缓存最大值，移除最旧（tail）的缓存节点
      delete this.cacheMap[this.tail!.key]
      this.detach(this.tail)
      this.size--
    }

    // Write to head of LinkedList
    // 链表为空，直接插入到表头
    if (!this.head) {
      this.head = this.tail = new Node(key, value)
    } else {
      // 不为空的情况，向链表头插入新节点
      const node = new Node(key, value)
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    // update cacheMap with LinkedList key and Node reference
    this.cacheMap[key] = this.head
    this.size++
  }

  /**
   * 断开当前节点
   * @param node
   */
  private detach(node: NodeType) {
    // 断开节点要先链接，再断开
    // 当前是 Head 节点，断开节点 next 指针
    if (node!.prev === null) {
      this.head = node!.next
    } else {
      node!.prev.next = node!.next
    }

    // 当前节点是 Tail，断开节点 prev 指针
    if (node!.next === null) {
      this.tail = node!.prev
    } else {
      node!.next.prev = node!.prev
    }
  }

  /**
   * 清空缓存数据
   */
  clear() {
    this.size = 0
    this.head = null
    this.tail = null
    this.cacheMap = {}
  }

  // Invokes the callback function with every node of the chain and the index of the node.
  /**
   * 遍历缓存值
   * @param fn
   */
  forEach(fn: (item: Pick<Node, "key" | "value">, index: number) => void) {
    let node = this.head
    let counter = 0
    while (node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }

  // To iterate over LRU with a 'for...of' loop
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield { key: node.key, value: node.value }
      node = node.next
    }
  }

  /**
   * toString
   * @returns string
   */
  toString() {
    let str = `LinkedList(${this.size}) { `
    let current = this.head
    while (current) {
      str += `${current.key} <==> ${current.value}, `
      current = current.next
    }
    if (str.lastIndexOf(", ") > -1) {
      str = str.substring(0, str.lastIndexOf(", "))
    }
    str += " }"
    return str
  }

  print() {
    console.log(this.toString())
  }
}
