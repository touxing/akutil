let list = new akutil.LinkedList()
console.log(list.getHead())
list.append(1)
list.append(2)
list.append(3)
list.append(4)
console.log('size', list.size())
list.print()
console.log(list.toString())
console.log(list.removeAt(1))
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
console.log('size', list.size())
