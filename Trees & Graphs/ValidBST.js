// Given the root of a binary tree, determine if it is a valid binary search tree(BST).

// A valid BST is defined as follows:

// The left
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


//   Example 1:


// Input: root = [2, 1, 3]
// Output: true
// Example 2:


// Input: root = [5, 1, 4, null, null, 3, 6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


// Constraints:

// The number of nodes in the tree is in the range[1, 104].
// - 231 <= Node.val <= 231 - 1

import { BinarySearchTree } from "./BinarySearchTree.js"

const getLevelIdxRange = level => {
  if (level === 0) return { low: 0, high: 0 }
  else {
    let low = getLevelIdxRange(level - 1).high + 1
    let high = low + Math.pow(2, level) - 1
    return { low, high }
  }
}

const getLevelOfTree = arr => {
  let i = 0
  while (getLevelIdxRange(i).high + 1 < arr.length) i++
  return i
}

const getParentsAtLevel = (root, level) => {
  if (level === 0) return []
  let range = getLevelIdxRange(level - 1)
  let parents = []
  for (let i = range.low; i <= range.high; i++) {
    parents.push(root[i])
  }
  return parents
}

const isValidBST = root => {
  if (root.length === 1) return true
  let lastLevel = getLevelOfTree(root)
  for (let level = 1; level < lastLevel; level++) {
    let idxRange = getLevelIdxRange(level)
    let parents = getParentsAtLevel(root, level)
    let parentIdx = 0
    for (let i = idxRange.low; i <= idxRange.high; i += 2) {
      let left = root[i]
      let right = root[i + 1]
      if (left !== null && right !== null) {
        if (left > parents[parentIdx] || right < parents[parentIdx]) return false
      }
      parentIdx++
    }
  }
  return true
}

const isValidBST2 = root => {
  let tree = new BinarySearchTree()
  for (let i = 0; i < root.length; i++) {
    tree.insert(root[i])
  }
  let treeArr = tree.breadthFirstSearch()
  for (let i = 0; i < root.length; i++) {
    if (treeArr[i] !== root[i]) return false
  }
  return true
}

let test1 = [5, 1, 4, null, null, 3, 6]
let test2 = [2, 1, 3]
console.log(isValidBST(test2))
console.log(isValidBST2(test2))