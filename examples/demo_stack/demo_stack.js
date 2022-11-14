const stack = new akutil.Stack()
console.log(stack.peek())
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())

// 十进制转二进制
function divideBy2(decNumber) {
  var remStack = new akutil.Stack(),
    rem,
    binarryString = ''

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }

  while (!remStack.isEmpty()) {
    binarryString += remStack.pop().toString()
  }
  return binarryString
}
console.log('10 十进制转二进制', divideBy2(10)) // 10 十进制转二进制 1010
console.log(divideBy2(3)) // 11
console.log(divideBy2(233)) // 11101001

// 转换任意进制
function baseConverter(decNumber, base) {
  var remStack = new akutil.Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF' // 十六进制转换映射

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop().toString()]
  }

  return baseString
}

console.log(baseConverter(3, 10))
console.log(baseConverter(11, 16))
