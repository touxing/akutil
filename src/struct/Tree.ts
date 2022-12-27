export type NodeType = Node | null

export class Node {
  key: any
  left: Node | null
  right: Node | null
  constructor(key: any) {
    this.key = key
    this.left = null // 左节点引用
    this.right = null
  }
}
