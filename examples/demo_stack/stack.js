class Stack {
  stack
  constructor() {
    this.stack = []
  }
  isEmpty() {
    return this.stack.length === 0
  }
  size() {
    return this.stack.length
  }
  push(value) {
    this.stack.push(value)
  }
  pop() {
    return this.stack.pop()
  }
  clear() {
    this.stack = []
  }
  print() {
    JSON.stringify(this.stack, null, 2)
  }
}
