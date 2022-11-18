const dictionary = new akutil.Dictionary()

dictionary.set('gag', 'gag@email.com')
dictionary.set('aaa', 'aaa@email.com')
dictionary.set('bbb', 'bbb@email.com')

console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.keyValues())
console.log(dictionary.get('aaa'))
console.log(dictionary.toString())
dictionary.forEach((k, v, i) => {
  console.log('forEach', i, `key:${k}, value:${v}`)
})
