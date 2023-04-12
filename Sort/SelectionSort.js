const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    // Swap min & arr[i]
    arr[i] = arr[minIndex] + arr[i]
    arr[minIndex] = arr[i] - arr[minIndex]
    arr[i] = arr[i] - arr[minIndex]
  }
  return arr
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(selectionSort(numbers))