/**
 * 链表节点
 */
class Node {
  constructor(public element: any, public next: any = null) {}
}

export class LinkedList {
  private length: number
  private head: Node | null
  constructor() {
    this.length = 0
    this.head = null
  }

  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
  /**
   * 向链表尾添加一个新节点
   * @param element
   */
  append(element: any) {
    let node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }
  /**
   * 向链表指定位置插入一个新的项
   * @param position 位置
   * @param element 项
   * @returns
   */
  insert(position: number, element: any) {
    if (position > this.size()) return false

    let node = new Node(element)
    let current = this.head
    let previous: Node
    if (position === 0) {
      node.next = current
      this.head = node
    } else {
      let i = 0
      for (; i < position; i++) {
        previous = current as Node
        current = current!.next
      }
      node.next = current
      previous!.next = node
    }
    this.length++
    return true
  }
  /**
   * 删除链表指定位置的项
   * @param position 位置
   * @returns
   */
  removeAt(position: number) {
    // 位置越界，超过链表长度
    if (position > this.size() || this.size() <= 0) return false

    let current = this.head,
      previous: Node,
      index = 0
    // 删除第一个节点
    if (position === 0) {
      this.head = current!.next
    } else {
      while (index++ < position) {
        previous = current as Node
        current = current!.next as Node
      }
      // 最后一个节点的next就是null
      previous!.next = current!.next as Node
    }
    this.length--
    return current!.element
  }
  /**
   * todo: 从链表移除一项
   * @param element
   */
  remove(element: any) {}
  /**
   * 返回节点在链表中的索引
   * @param element
   * @returns return index, if not found, return `-1`
   */
  indexOf(element: any) {
    let index = -1
    // 遍历链表，从head开始
    let current = this.head
    for (let i = 0, len = this.size(); i < len; i++) {
      if (current!.element === element) {
        index = i
        break
      }
      // 最后一个节点，要终止，否则会置空最后一个节点
      current = current!.next
    }
    return index
  }
  /**
   * 获取链表第一项
   * @returns element
   */
  getHead() {
    return this.head?.element
  }
  toString() {
    let result = []
    let current = this.head
    while (current?.next) {
      result.push(current.element)
      current = current.next
    }
    // 第一个或最后一个节点
    result.push(current!.element)
    return result.join()
  }
  print() {
    let str = '['
    let current = this.head
    while (current?.next) {
      str += current.element + '->'
      current = current.next
    }
    // 第一个或最后一个节点
    str += current!.element
    str += ']'
    console.log(str)
  }
}
