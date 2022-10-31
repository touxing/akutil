window.addEventListener(
  'resize',
  akutil.throttle(function (evt) {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }, 250)
) // Will log the window dimensions at most every 250ms

window.addEventListener(
  'resize',
  akutil.debounce(() => {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }, 250)
) // Will log the window dimensions at most every 250ms

let counter = 0
const updateState = () => {
  counter++
}
const debouncedUpdate = akutil.debounce(updateState)
debouncedUpdate() // counter == 1
debouncedUpdate() // counter == 1
console.log(counter, 1)
setTimeout(() => {
  debouncedUpdate() // counter == 2
  console.log(counter, 2)
}, 300)
