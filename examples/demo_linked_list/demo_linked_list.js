let list = new akutil.LinkedList()
console.log(list.getHead())
list.append(1)
list.append(2)
list.append(3)
list.append(4)
console.log('size', list.size())
list.print()
console.log(list.removeAt(1))
console.log(list.toString())
console.log('removeAt max size',list.removeAt(3))
// console.log('insert after max size node', list.insert(3, 6))
console.log('get max size node',list.getElementAt(list.size()-1));
console.log(list.toString())
console.log('insert after 2th node', list.insert(2, 6))
console.log('insert after 1th node', list.insert(0, -1))
console.log(list)
console.log(list.getHead())
list.print()
console.log('size', list.size())
console.log('indexOf', list.indexOf(6))
console.log('indexOf', list.indexOf(4))
list.print()
console.log('remove', list.remove(4))
console.log('remove', list.remove(-1))
console.log('get element', list.getElementAt(0));
console.log('get element', list.getElementAt(1));
console.log('get element', list.getElementAt(2));
console.log('get element', list.getElementAt(4));
list.print()
console.log('size', list.size())

console.log('双向链表==========');
let doublyList = new akutil.DoublyLinkedList()
doublyList.append(1)
doublyList.append(2)
doublyList.append(4)
doublyList.print()
doublyList.insert(3, 33)
doublyList.print()
doublyList.insert(0, 0)
console.log('=====');
doublyList.print()
console.log(doublyList.toString())
doublyList.insert(3, 333)
doublyList.insert(5, 5)
doublyList.insert(3, 22)
console.log('get first', doublyList.getElementAt(0))
console.log('get 3', doublyList.getElementAt(3))
console.log('get last', doublyList.getElementAt(doublyList.size()-1))
console.log('333 indexOf', doublyList.indexOf(333));
console.log('22 indexOf', doublyList.indexOf(22));
console.log(doublyList.toString())
console.log(doublyList.size());
doublyList.print()
console.log('removeAt 0', doublyList.removeAt(0));
console.log('removeAt 3', doublyList.removeAt(3));
console.log('removeAt size', doublyList.removeAt(doublyList.size()-1));
console.log('removeAt over size', doublyList.removeAt(doublyList.size()));
console.log('get head', doublyList.getHead());
console.log('get tail', doublyList.getTail());
doublyList.print()
