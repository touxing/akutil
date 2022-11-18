const set = new akutil.Set()

console.log(set.add(1))
console.log(set.values())
console.log(set.has(1))
console.log(set.size())

set.add(2)
console.log(set.add(2))
console.log(set.values())
console.log(set.has(2))
console.log(set.size())

set.delete(1)
console.log(set.values())

console.log(set.delete(3))
console.log(set.values())

const setA = new akutil.Set()
const setB = new akutil.Set()

setA.add(1)
setA.add(2)
setA.add(3)

setB.add(3)
setB.add(4)
setB.add(5)

const unionAB = setA.union(setB)
console.log('A', setA.values());
console.log('B', setB.values());
console.log('A 并集 B',unionAB.values())
console.log('A 交集 B',setA.intersection(setB).values())
console.log('A 差集 B', setA.difference(setB).values())

const setC = new akutil.Set()
setC.add(1)

console.log('C is A 的子集', setC.isSubsetOf(setA));
console.log('B is A 的子集', setB.isSubsetOf(setA));
