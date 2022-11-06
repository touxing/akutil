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
  print() {
    console.log(this.queue)
  }
}
