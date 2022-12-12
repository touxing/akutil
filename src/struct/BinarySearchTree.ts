import { Node } from './Tree'

/**
 * 二叉搜索树
 */
export class BinarySearchTree {
  root: Node | null
  constructor() {
    this.root = null
  }
  insert(key: any) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node: Node, newNode: Node) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  search(key: any) {}
  inOrderTraverse() {}
  preOrderTraverse() {}
  postOrderTraverse() {}
  min() {}
  max() {}
  remove(key: any) {}
}
