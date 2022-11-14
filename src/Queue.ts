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
  front() {
    return this.queue[0]
  }
  print() {
    console.log(this.queue)
  }
}

/**
 * todo: 队列元素
 * @param this
 * @param element
 * @param priority
 */
function QueueElement(this: any, element: any, priority: number) {
  this.element = element
  this.priority = priority
}
/**
 * 优先队列
 */
export class PriorityQueue {
  private queue: Array<{ value: any; priority: number }>

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
    this.queue.splice(position, 0, { value, priority })
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
    this.queue.splice(position, 0, { value, priority })
  }
  dequeue() {
    return this.queue.shift()?.value
  }
  front() {
    return this.queue[0]?.value
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
