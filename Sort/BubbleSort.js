const bubbleSort = arr => {
  for (let times = 1; times <= arr.length - 1; times++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap numbers
        arr[i] = arr[i] + arr[i + 1]
        arr[i + 1] = arr[i] - arr[i + 1]
        arr[i] = arr[i] - arr[i + 1]
      }
    }
  }
  return arr
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(bubbleSort(numbers))