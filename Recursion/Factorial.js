const factorial = n => {
  if (n === 0) return 0
  if (n === 1) return 1
  return n * factorial(n - 1)
}

for (let i = 0; i < 10; i++)
  console.log(factorial(i))