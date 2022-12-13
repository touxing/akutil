import { BinarySearchTree } from "../src/struct/BinarySearchTree"

describe("BinarySearchTree", () => {
  test("insert: one", () => {
    let tree = new BinarySearchTree()
    tree.insert(1)
    expect(tree).toEqual({ root: { key: 1, left: null, right: null } })
  })

  test("insert: two", () => {
    let tree = new BinarySearchTree()
    tree.insert(1)
    tree.insert(2)
    expect(tree).toEqual({
      root: { key: 1, left: null, right: { key: 2, left: null, right: null } },
    })
  })

  let tree = new BinarySearchTree()
  tree.insert(3)
  tree.insert(10)
  tree.insert(2)
  tree.insert(5)
  test("tree: inOrderTraverseNode", () => {
    let result: Array<any> = []
    tree.inOrderTraverse((value: any) => {
      result.push(value)
    })

    expect(result).toEqual([2, 3, 5, 10])
  })

  test("tree: preOrderTraverseNode", () => {
    let result: Array<any> = []
    tree.preOrderTraverse((value: any) => {
      result.push(value)
    })
    expect(result).toEqual([3, 2, 10, 5])
  })

  test("tree: postOrderTraverseNode", () => {
    let result: Array<any> = []

    tree.postOrderTraverse((value: any) => {
      result.push(value)
    })

    expect(result).toStrictEqual([2, 5, 10, 3])
  })

  test("tree: min value", () => {
    expect(tree.min()).toEqual(2)
  })

  test("tree: max value", () => {
    expect(tree.max()).toEqual(10)
  })

  test("search true", () => {
    expect(tree.search(3)).toBe(true)
  })

  test("search false", () => {
    expect(tree.search(11)).toBe(false)
  })
})
