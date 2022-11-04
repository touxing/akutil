/**
 * 栈数据结构
 */
export class Stack {
  private stack: Array<any>
  constructor() {
    this.stack = []
  }
  isEmpty() {
    return this.stack.length === 0
  }
  size(): number {
    return this.stack.length
  }
  push(data: any) {
    this.stack.push(data)
  }
  pop() {
    return this.stack.pop()
  }
  peek() {
    if (this.isEmpty()) return
    return this.stack[this.stack.length - 1]
  }
  print() {
    console.log(this.stack)
  }
}
