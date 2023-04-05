/* Given an integer array nums, find the
subarray
with the largest sum, and return its sum.



  Example 1:

Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray[4, -1, 2, 1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray[1] has the largest sum 1.
Example 3:

Input: nums = [5, 4, -1, 7, 8]
Output: 23
Explanation: The subarray[5, 4, -1, 7, 8] has the largest sum 23.


Constraints:

1 <= nums.length <= 105
  - 104 <= nums[i] <= 104 */

const maximumSubarray = arr => {
  let cloneArr = [...arr]
  let max = cloneArr.reduce((prevValue, v) => prevValue + v, 0)
  let maxSub = [...arr]
  let subSum = max
  while (cloneArr.length > 1) {
    let l = 0
    let r = cloneArr.length - 1
    if (cloneArr[l] < cloneArr[r]) {
      subSum -= cloneArr[l]
      cloneArr.shift()
    } else if (cloneArr[r] < cloneArr[l]) {
      subSum -= cloneArr[r]
      cloneArr.pop()
    } else if (cloneArr[l] === cloneArr[r]) {
      while (l < r) {
        l++
        r--
        if (cloneArr[l] < cloneArr[r]) {
          subSum -= cloneArr[0]
          cloneArr.shift()
          break
        } else if (cloneArr[r] < cloneArr[l]) {
          subSum -= cloneArr[cloneArr.length - 1]
          cloneArr.pop()
          break
        }
      }
      if (l > r) {
        subSum -= cloneArr[r]
        cloneArr.pop()
      }
    }
    if (subSum > max) {
      max = subSum
      maxSub = [...cloneArr]
    }
  }
  return { subArray: maxSub, max: max }
}

console.log(maximumSubarray([5, 4, -1, 7, 8]))