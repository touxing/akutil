/**
 * 双向链表
 */
import { Node, LinkedList } from './LinkedList'

class DoublyNode {
  element: any
  next: any
  prev: any
  constructor(element: any) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList extends LinkedList {
  protected head: DoublyNode | null
  protected tail: DoublyNode | null
  constructor() {
    super()
    this.tail = null
    this.head = null
  }
  append(element: any) {
    let node = new DoublyNode(element)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      node.prev = current
      current.next = node
      this.tail = node
    }
    this.length++
  }
  insert(position: number, element: any): boolean {
    if (position < 0 || position > this.size()) return false
    const node = new DoublyNode(element)
    let current = this.head
    if (position === 0) {
      // 第一项
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        current!.prev = node
        this.head = node
      }
    } else if (position === this.size()) {
      // 最后一项
      node.prev = this.tail
      this.tail = node
    } else {
      // 在链表中间插入
      let previous: DoublyNode = this.head as DoublyNode
      let i = 0
      let middle = Math.floor(this.size() / 2)
      // 可以根据数值大小，从头遍历和从尾遍历
      if (position > middle) {
        // 插入位置大于链表长度一半，从尾开始遍历
        current = this.tail
        previous = this.tail!.prev
        i = this.size()
        for (; i > position; i--) {
          previous = current!
          current = current!.prev
        }
        // 交互前一个节点，和后一个节点
        let tmp = current
        current = previous
        previous = tmp!
      } else {
        for (; i < position; i++) {
          previous = current!
          current = current!.next
        }
      }
      // 插入节点，插入的节点先接上链表，再断开连接处的节点
      node.next = current
      current!.prev = node
      previous!.next = node
      node.prev = previous!
    }
    this.length++
    return true
  }
  removeAt(position: number) {
    if (position < 0 || position >= this.size()) return

    let current = this.head,
      previous: DoublyNode
    // 删除第一个节点
    if (position === 0) {
      this.head = current!.next
      if (this.size() === 1) {
        this.tail = null
      } else {
        this.head!.prev = null
      }
    } else if (position === this.size() - 1) {
      // 最后一项
      current = this.tail
      this.tail = current!.prev
      this.tail!.next = null
    } else {
      for (let i = 0; i < position; i++) {
        previous = current!
        current = current!.next
      }

      previous!.next = current!.next
      current!.next.prev = previous!
    }
    this.length--
    return current?.element
  }
  remove(element: any): boolean {
    return false
  }
  /**
   * 返回节点在链表中匹配的第一个元素的索引
   * @param element
   * @returns return index, if not found, return `-1`
   */
  indexOf(element: any): number {
    let index = -1
    let current = this.head
    for (let i = 0, len = this.size(); i < len; i++) {
      if (element === current?.element) {
        index = i
        break
      }
      current = current!.next
    }
    return index
  }
  getTail(): any {
    return this.tail?.element
  }
  print(): void {
    let str = '['
    let current = this.head
    while (current?.next) {
      str += current.element + '<->'
      current = current.next
    }
    // 第一个或最后一个节点
    str += current?.element
    str += ']'
    console.log(str)
  }
}
