/*
 * File Created: Tuesday, 20th December 2022 4:07:48 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Tuesday, 20th December 2022 4:18:17 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 * -----
 * Copyright 2022 - 2022 Your Company, Your Company
 */
import { BinarySearchTree } from "./BinarySearchTree"
import { NodeType, Node } from "./Tree"

export class AVLTree extends BinarySearchTree {
  constructor() {
    super()
    this.root = null
  }

  /**
   * 计算平衡因子，即左右子树高度的差值，结果不为0、1或-1，需要平衡AVL树
   * @param root
   * @returns
   */
  getBalanceFactor(root: Node) {
    return this.getNodeHeight(root.left) - this.getNodeHeight(root.right)
  }

  /**
   * 获取节点高度
   * @param node
   * @returns
   */
  getNodeHeight(node: NodeType): number {
    let height = 0
    if (node === null) {
      height = -1
    } else {
      height =
        Math.max(
          this.getNodeHeight(node.left),
          this.getNodeHeight(node.right)
        ) + 1
    }
    return height
  }

  insert(key: any) {
    let node = new Node(key)
    if (this.root === null) {
      this.root = node
    } else {
      this.root = this.insertNode(this.root, node)
    }
    return this
  }

  protected insertNode(root: Node, newNode: Node): Node {
    if (root === null) {
      root = newNode
    } else if (newNode.key < root.key) {
      root.left = this.insertNode(root.left!, newNode)!
      // 确认是否需要平衡
      if (this.getBalanceFactor(root) > 1) {
        // 旋转
        if (newNode.key < root.left.key) {
          root = this.rotationLL(root)
        } else {
          root = this.rotationLR(root)
        }
      }
    } else if (newNode.key > root.key) {
      root.right = this.insertNode(root.right!, newNode)!
      // 确认是否需要平衡
      if (this.getBalanceFactor(root) < -1) {
        // 旋转
        if (newNode.key > root.right.key) {
          root = this.rotationRR(root)
        } else {
          root = this.rotationRL(root)
        }
      }
    }
    return root
  }

  /**
   * 右-右：向左的单旋转
   * @param node
   * @returns
   */
  rotationRR(node: Node): Node {
    let tmp = node.right!
    node.right = tmp.left
    tmp.left = node
    return tmp
  }
  /**
   * 左-左：向右的单旋转
   * @param node
   * @returns
   */
  rotationLL(node: Node): Node {
    let tmp = node.left!
    node.left = tmp.right
    tmp.right = node
    return tmp
  }
  /**
   * 左-右：向右的双旋转
   * @param node
   * @returns
   */
  rotationLR(node: Node): Node {
    node.left = this.rotationRR(node.left!)
    return this.rotationLL(node)
  }
  rotationRL(node: Node): Node {
    node.right = this.rotationLL(node.right!)
    return this.rotationRR(node)
  }
}
