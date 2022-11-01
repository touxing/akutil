export class Stack {
  private items: Array<any> = []
  constructor() {}
  isEmpty() {
    return this.items.length === 0
  }
  size(): number {
    return this.items.length
  }
  push(data: any) {
    this.items.push(data)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    if (this.isEmpty()) return
    return this.items[this.items.length - 1]
  }
  print() {
    console.log(this.items)
  }
}
