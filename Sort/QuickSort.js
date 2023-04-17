const quickSort = arr => {
  let length = arr.length
  if (length <= 1) return arr
  let left = []
  let right = []
  let pivot = Math.floor(length / 2)
  for (let i = 0; i < length; i++) {
    if (i !== pivot) {
      if (arr[i] < arr[pivot]) left.push(arr[i])
      else right.push(arr[i])
    }
  }
  return quickSort(left).concat(arr[pivot]).concat(quickSort(right))
}

const quickSort2 = arr => {
  let length = arr.length
  if (length <= 1) return arr
  let l = 0
  let r = 0
  let pivot = Math.floor(length / 2)
  for (let i = 0; i < length; i++) {
    if (i < pivot) {
      if (arr[i] >= arr[pivot]) {
        arraymove(arr, i, pivot + r)
        i--
        pivot--
        r++
      } else {
        l++
      }
    }
    if (i > pivot + r) {
      if (arr[i] >= arr[pivot]) {
        r++
      } else {
        arraymove(arr, i, l)
        pivot++
        l++
      }
    }
  }
  return quickSort2(arr.splice(0, l))
    .concat(arr.shift())
    .concat(quickSort2(arr))
}

function arraymove(arr, fromIndex, toIndex) {
  let element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

function quickSort3(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort3(arr, low, pivotIndex - 1);
    quickSort3(arr, pivotIndex + 1, high);
  }
  return arr
}

function partition(arr, low, high) {
  let pivotIndex = Math.floor((low + high) / 2);
  let pivot = arr[pivotIndex];
  let i = low;
  for (let j = low; j <= high; j++) {
    if (j !== pivotIndex && arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      if (i === pivotIndex) {
        pivotIndex = j;
      }
      i++;
    }
  }
  [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
  return i;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(quickSort3(numbers))