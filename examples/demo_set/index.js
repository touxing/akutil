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
