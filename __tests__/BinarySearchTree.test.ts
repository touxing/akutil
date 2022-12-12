import { BinarySearchTree } from '../src/struct/BinarySearchTree'
test('basic', () => {
  let tree = new BinarySearchTree()
  tree.insert(1)
  console.log(tree)

  expect(tree).toEqual({ root: { key: 1, left: null, right: null } })
})
