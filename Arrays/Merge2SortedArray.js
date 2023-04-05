const Merge2SortedArray = (arr1, arr2) => {
  let totalItems = arr1.length + arr2.length
  let arr = new Array(totalItems)
  let index = 0
  let i1 = 0
  let i2 = 0
  while (index < totalItems) {
    if (arr1[i1] < arr2[i2] || i2 === arr2.length) {
      arr[index] = arr1[i1]
      i1++
    } else if (arr1[i1] >= arr2[i2] || i1 === arr1.length) {
      arr[index] = arr2[i2]
      i2++
    }
    index++
  }
  return arr
}

let arr1 = [0, 3, 4, 31]
let arr2 = [4, 6, 30]
console.log(Merge2SortedArray(arr1, arr2))
console.log(arr1, arr2)