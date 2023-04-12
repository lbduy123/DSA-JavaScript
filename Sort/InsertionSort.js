const insertionSort = arr => {
  let sortedArr = []
  sortedArr.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < sortedArr[0]) sortedArr.unshift(arr[i])
    else if (arr[i] > sortedArr[sortedArr.length - 1]) sortedArr.push(arr[i])
    else {
      for (let j = 0; j < sortedArr.length - 1; j++) {
        if (arr[i] >= sortedArr[j] && arr[i] <= sortedArr[j + 1]) {
          sortedArr.splice(j + 1, 0, arr[i])
          break
        }
      }
    }
  }
  return sortedArr
}

function insertionSort2(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(insertionSort(numbers))
console.log(insertionSort2(numbers))