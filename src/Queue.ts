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
