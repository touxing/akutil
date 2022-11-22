/**
 * 队列数据结构
 */
export class Queue {
  private queue: Array<any>
  constructor() {
    this.queue = []
  }
  isEmpty(): boolean {
    return this.queue.length === 0
  }
  size(): number {
    return this.queue.length
  }
  enqueue(data: any): void {
    this.queue.push(data)
  }
  dequeue() {
    return this.queue.shift()
  }
  peek() {
    return this.queue[0]
  }
  print() {
    console.log(this.queue)
  }
}

/**
 *  优先队列元素
 * @param element
 * @param priority
 */
class PriorityQueueNode {
  constructor(public element: any, public priority: number) {}
}
/**
 * 优先队列
 */
export class PriorityQueue {
  private queue: Array<PriorityQueueNode>

  constructor() {
    this.queue = []
  }

  isEmpty() {
    return this.queue.length === 0
  }
  size() {
    return this.queue.length
  }
  enqueue(value: any, priority: number = 1) {
    let len = this.queue.length
    let position = len
    // 最大优先队列，值越大，优先级越高
    while (this.size() && priority > this.queue[position - 1]?.priority) {
      position--
    }
    let node = new PriorityQueueNode(value, priority)
    this.queue.splice(position, 0, node)
  }
  /**
   * 入队列，最小优先原则
   */
  enqueueByMin(value: any, priority: number) {
    let position = 0
    for (let i = 0, len = this.queue.length; i < len; i++) {
      if (priority > this.queue[i].priority) {
        position = i + 1
      }
    }
    let node = new PriorityQueueNode(value, priority)
    this.queue.splice(position, 0, node)
  }
  dequeue() {
    return this.queue.shift()?.element
  }
  peek() {
    return this.queue[0]?.element
  }
  clear() {
    this.queue = []
  }
  print() {
    console.log(this.queue)
  }
}

/**
 * 循环队列
 * 是为了解决内存空间浪费的问题
 * 用指针方式实现
 */
export class CycleQueue {
  private queue: Array<any>
  public maxSize: number // 队列长度
  private head: number // 队列头
  private tail: number // 队列尾

  constructor(size: number) {
    // 初始化队列空间大小
    this.maxSize = size
    this.queue = new Array(size)
    this.head = 0
    this.tail = 0
  }

  isEmpty() {
    return this.head == this.tail
  }
  isFull() {
    // 队列必须空一个位置来判断队满的临界值
    return (this.tail + 1) % this.maxSize == this.head
  }
  size() {
    return (this.tail - this.head + this.maxSize) % this.maxSize
  }
  enqueue(value: any): boolean {
    if (this.isFull()) {
      return false
    }
    this.queue[this.tail] = value
    // 入队后， tail 指针后移一位
    this.tail = (this.tail + 1) % this.maxSize
    return true
  }
  dequeue() {
    if (this.isEmpty()) {
      return false
    }
    let result = this.queue[this.head]
    this.queue[this.head] = null
    this.head = (this.head + 1) % this.maxSize
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return false
    }
    return this.queue[this.head]
  }
  clear() {
    this.queue = []
  }
  toString() {
    return '[' + this.queue.join(',') + ']'
  }
  print() {
    console.log(this.queue)
  }
}

interface Iqueue {
  [x: string]: any
}
export class DoubleEndQueue {
  protected count: number // 控制队列大小
  protected lowestCount: number // 追踪第一个元素
  private queue: Iqueue // 可以使用数组，这里使用对象，获取元素更高效
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.queue = {}
  }

  size() {
    return this.count - this.lowestCount
  }
  isEmpty() {
    return this.size() === 0
  }
  enqueue(element: any) {
    this.queue[this.count] = element
    this.count++
  }
  dequeue() {
    if (this.isEmpty()) return
    const result = this.queue[this.lowestCount]
    delete this.queue[this.lowestCount]
    this.lowestCount++
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[this.lowestCount]
  }
  clear() {
    this.queue = {}
    this.count = 0
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.queue[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.queue[i]}`
    }
    return objString
  }

  /**
   * 在双端队列前端添加新元素
   * @param element
   */
  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.queue[this.lowestCount] = element
    } else {
      // 队列往后移动，给新元素在头部留一个位置
      // 这里也可以不移动，对象的索引可以为负数
      for (let i = this.count; i > 0; i--) {
        this.queue[i] = this.queue[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.queue[this.lowestCount] = element
    }
  }
  /**
   * 在双端队列尾端添加新元素
   * @param element
   */
  addBack(element: any) {
    return this.enqueue(element)
  }
  /**
   * removes the first element from the front of the DoubleEndQueue
   */
  removeFront() {
    return this.dequeue()
  }
  /**
   * removes the first element from the back of the DoubleEndQueue
   */
  removeBack() {
    if(this.isEmpty()) return
    const result = this.queue[this.count-1]
    delete this.queue[this.count-1]
    this.count--
    return result
  }
  /**
   * 返回双端队列前端的第一个元素
   */
  peekFront() {
    return this.peek()
  }
  /**
   * 返回双端队列尾端的第一个元素
   */
  peekBack() {
    if(this.isEmpty()) return
    return this.queue[this.count-1]
  }
}
