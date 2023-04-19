let calculations = 0

const cachedFibonacci = () => {
  let cache = {}
  const fibonacci = (n) => {
    if (n < 2) return n
    else {
      if (n in cache) return cache[n]
      else {
        calculations++
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
        return cache[n]
      }
    }
  }
  return fibonacci
}

let fibo = cachedFibonacci()
console.log(`Fibonacci value at index 9: ${fibo(9)}`)
console.log(`We did ${calculations} calculations`)
console.log(`Fibonacci value at index 15: ${fibo(15)}`)
console.log(`We did ${calculations} calculations`)