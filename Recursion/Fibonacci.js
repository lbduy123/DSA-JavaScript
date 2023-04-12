// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let arr = [0, 1, 1]
  if (n <= 0) return arr[0]
  if (n <= 2) return arr[n]
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[n]
}

function fibonacciRecursive(n) {
  if (n <= 0) return 0
  if (n <= 2) return 1
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

for (let i = 0; i < 15; i++)
  console.log(fibonacciIterative(i))