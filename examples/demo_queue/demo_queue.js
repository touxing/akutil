const queue = new akutil.Queue()
queue.print()
console.log(queue.isEmpty())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.enqueue(3)
console.log(queue.peek())

console.log('========优先队列')
// 优先队列
const priorityQueue = new akutil.PriorityQueue()
priorityQueue.print()
priorityQueue.enqueue('b')
priorityQueue.enqueue('c')
priorityQueue.enqueue('d')
priorityQueue.print()
console.log(priorityQueue.peek())
priorityQueue.enqueue('a', 2)
console.log(priorityQueue.peek())
priorityQueue.enqueue('e', 2)
priorityQueue.enqueue('f')
priorityQueue.enqueue('g')
priorityQueue.enqueue('h', 2)
priorityQueue.enqueue('A', 3)
priorityQueue.enqueueByMin('m', 4)
priorityQueue.enqueueByMin('mn', 3)
console.log(priorityQueue.peek())
priorityQueue.print()

console.log('=======循环队列')
const cycleQueue = new akutil.CycleQueue(3)
console.log(cycleQueue.enqueue(3))
console.log(cycleQueue.enqueue(2))
console.log(cycleQueue.toString())
console.log('isFull', cycleQueue.isFull())
console.log(cycleQueue.enqueue(1))
console.log(cycleQueue.toString())
console.log('size', cycleQueue.size())
console.log(cycleQueue.toString())
console.log(cycleQueue.enqueue(0))
console.log('size', cycleQueue.size())
console.log(cycleQueue.peek())
console.log(cycleQueue.enqueue(1))
console.log(cycleQueue.toString())
console.log(cycleQueue.dequeue())
console.log(cycleQueue.peek())
console.log(cycleQueue.toString())
console.log(cycleQueue.dequeue())
console.log(cycleQueue.toString())
console.log(cycleQueue.dequeue())

console.log('==========双端队列')
const q1 = new akutil.DoubleEndQueue()
q1.enqueue('John')
q1.enqueue('Jack')
q1.enqueue('Camla')
console.log(q1.toString())
console.log('size', q1.size())
console.log('peek', q1.peek())
console.log(q1.toString())
console.log('dequeue ', q1.dequeue())
console.log(q1.toString())
console.log('addFront', q1.addFront('Ason'))
console.log('addFront', q1.addFront('Bobo'))
console.log('addFront', q1.addFront('CoSa'))
console.log('addBack', q1.addBack('Goco'))
console.log('addBack', q1.addBack('Haifa'))
console.log('removeBack', q1.removeBack())
console.log('peekFront', q1.peekFront())
console.log('peekBack', q1.peekBack())
console.log(q1.toString())
console.log('clear', q1.clear())
console.log(q1.toString())

console.log('=======击鼓传花')
function hotPotato(elementsList, num) {
  const queue = new akutil.Queue()
  const eliminatedList = []

  elementsList.forEach((item) => {
    queue.enqueue(item)
  })

  while (queue.size() > 1) {
    for (let i = 0, len = queue.size(); i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminatedList,
    winner: queue.dequeue(),
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let random = Math.floor(Math.random() * names.length)
console.log(`参与击鼓传花游戏人员${names}, 随机数${random}`)
const result = hotPotato(names, random)
result.eliminatedList.forEach((name) => {
  console.log(`${name}在击鼓传花游戏中被淘汰。`)
})
console.log(`胜利者： ${result.winner}`)

console.log('=====回文检查器')

function palindromeChecker(aString) {
  if (!aString) return false

  const queue = new akutil.DoubleEndQueue()
  aString = aString.toLocaleLowerCase().replace(/\s?/g, '')
  for (let i = 0, len = aString.length; i < len; i++) {
    queue.addBack(aString[i])
  }

  let firstChar, lastChar
  let isEqual = true
  while (isEqual && queue.size() > 1) {
    firstChar = queue.removeFront()
    lastChar = queue.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
      break
    }
  }
  return isEqual
}

console.log('a', palindromeChecker('a'))
console.log('ab', palindromeChecker('ab'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level', palindromeChecker('level'))
console.log(
  'Was it a car or a cat I saw',
  palindromeChecker('Was it a caror a cat I saw')
)
console.log('Step on no pets', palindromeChecker('Step on no pets'))
