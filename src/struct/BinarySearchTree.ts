import { Node } from "./Tree"

type NodeType = Node | null
/**
 * 二叉搜索树
 */
export class BinarySearchTree {
  protected root: NodeType
  constructor() {
    this.root = null
  }
  /**
   * 插入节点
   * @param key
   * @returns
   */
  insert(key: any) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
    return this
  }
  protected insertNode(node: Node, newNode: Node) {
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

  /**
   *
   * @param key
   */
  search(key: any): boolean {
    return this.searchNode(this.root, key)
  }
  protected searchNode(node: NodeType, key: any): boolean {
    if (node === null) return false
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  /**
   * 中序遍历
   * @param callback
   */
  inOrderTraverse(callback: (value: any) => void) {
    this.inOrderTraverseNode(this.root, callback)
  }
  /**
   * 前序遍历
   * @param callback
   */
  preOrderTraverse(callback: (value: any) => void) {
    this.preOrderTraverseNode(this.root, callback)
  }
  /**
   * 后序遍历
   * @param callback
   */
  postOrderTraverse(callback: (value: any) => void) {
    this.postOrderTraverseNode(this.root, callback)
  }
  protected inOrderTraverseNode(node: NodeType, callback: (key: any) => void) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  protected preOrderTraverseNode(node: NodeType, callback: (key: any) => void) {
    if (node === null) return
    callback(node.key)
    this.preOrderTraverseNode(node.left, callback)
    this.preOrderTraverseNode(node.right, callback)
  }
  protected postOrderTraverseNode(
    node: NodeType,
    callback: (key: any) => void
  ) {
    if (node === null) return
    this.postOrderTraverseNode(node.left, callback)
    this.postOrderTraverseNode(node.right, callback)
    callback(node.key)
  }
  /**
   * 返回最小值
   * @returns
   */
  min() {
    let node = this.root
    if (node === null) return null
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  /**
   * 返回树的最大值
   * @returns
   */
  max() {
    let node = this.root
    if (node === null) return null
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  /**
   * 删除节点
   * @param key
   * @returns
   */
  remove(key: any) {
    this.root = this.removeNode(this.root, key)
    return this
  }

  protected removeNode(node: NodeType, key: any): NodeType {
    if (node === null) return node
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // key == node.key
      // 第一种情况：一个叶子节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // 第二种情况：一个只有1个子节点的节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      // 第三种情况：一个有2个子节点的节点
      let aux = this.findMinNode(node.right)!
      // 维持二叉搜索树的性质：右边的节点比左边的节点大
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
  /**
   * 找到一颗二叉搜索树的最小节点
   * @param node
   * @returns
   */
  findMinNode(node: NodeType): NodeType {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
}
