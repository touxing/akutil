import { BinarySearchTree } from "../src/struct/BinarySearchTree"
test("insert: one", () => {
  let tree = new BinarySearchTree()
  tree.insert(1)
  console.log(tree)
  expect(tree).toEqual({ root: { key: 1, left: null, right: null } })
})

test("insert: two", () => {
  let tree = new BinarySearchTree()
  tree.insert(1)
  tree.insert(2)
  console.log(tree)
  expect(tree).toEqual({
    root: { key: 1, left: null, right: { key: 2, left: null, right: null } },
  })
})
