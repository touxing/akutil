import { AVLTree } from "../src/akutil"

describe("AVLTree", () => {
  test("insert node", () => {
    let avlTree = new AVLTree()
    avlTree.insert(1).insert(2).insert(3).insert(4).insert(5)
    let result: any[] = []
    avlTree.preOrderTraverse((node) => {
      result.push(node)
    })
    expect(result).toEqual([2, 1, 4, 3, 5])
  })

  test("insert node RR for left single rotation", () => {
    let avlTree = new AVLTree()
    let arr = [50, 30, 70, 60, 80, 90]
    arr.forEach((item) => {
      avlTree.insert(item)
    })
    let result: any[] = []
    avlTree.preOrderTraverse((node) => {
      result.push(node)
    })
    expect(result).toEqual([70, 50, 30, 60, 80, 90])
  })

  test("insert node LL", () => {
    let avlTree = new AVLTree()
    let arr = [50, 30, 70, 10, 40, 5]
    arr.forEach((item) => {
      avlTree.insert(item)
    })
    let result: any[] = []
    avlTree.preOrderTraverse((node) => {
      result.push(node)
    })
    expect(result).toEqual([30, 10, 5, 50, 40, 70])
  })

  test("insert node LR", () => {
    let avlTree = new AVLTree()
    let arr = [50, 30, 70, 10, 40, 35]
    arr.forEach((item) => {
      avlTree.insert(item)
    })
    let result: any[] = []
    avlTree.preOrderTraverse((node) => {
      result.push(node)
    })
    expect(result).toEqual([40, 30, 10, 35, 50, 70])
  })

  test("insert node RL", () => {
    let avlTree = new AVLTree()
    let arr = [70, 50, 80, 72, 90, 75]
    arr.forEach((item) => {
      avlTree.insert(item)
    })
    let result: any[] = []
    avlTree.preOrderTraverse((node) => {
      result.push(node)
    })
    expect(result).toEqual([72, 70, 50, 80, 75, 90])
  })
})
