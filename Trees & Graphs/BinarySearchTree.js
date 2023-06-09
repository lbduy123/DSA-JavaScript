export class TreeNode {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let node = new TreeNode(value)
    if (this.root === null) {
      this.root = node
      return this
    }
    let pointer = this.root
    while (true) {
      if (pointer.value > value) {
        if (pointer.left === null) {
          pointer.left = node
          return this
        }
        pointer = pointer.left
      } else {
        if (pointer.right === null) {
          pointer.right = node
          return this
        }
        pointer = pointer.right
      }
    }
  }

  lookup(value) {
    if (!this.root) return null
    let pointer = this.root
    while (pointer) {
      if (pointer.value === value) return pointer
      if (pointer.value > value) pointer = pointer.left
      else pointer = pointer.right
    }
    return null
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let current = this.root
    let values = []
    let queue = [current]
    while (queue.length > 0) {
      let node = queue.shift()
      values.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return values
  }

  breadthFirstSearchRecursive(queue = [this.root], values = []) {
    if (!queue.length) return
    let node = queue.shift()
    values.push(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
    this.breadthFirstSearchRecursive(queue, values)
    return values
  }

  DFSInorder(root = this.root, values = []) {
    if (root.left) this.DFSInorder(root.left, values)
    values.push(root.value)
    if (root.right) this.DFSInorder(root.right, values)
    return values
  }

  DFSPreorder(root = this.root, values = []) {
    values.push(root.value)
    if (root.left) this.DFSPreorder(root.left, values)
    if (root.right) this.DFSPreorder(root.right, values)
    return values
  }

  DFSPostorder(root = this.root, values = []) {
    if (root.left) this.DFSPostorder(root.left, values)
    if (root.right) this.DFSPostorder(root.right, values)
    values.push(root.value)
    return values
  }
}

let tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//        9
//    4        20
//  1   6   15    170
// console.log(tree.lookup(15))
let treeObject = (traverse(tree.root))
// console.log(JSON.stringify(treeObject))
// console.log(tree.breadthFirstSearch())
// console.log(tree.breadthFirstSearchRecursive())
// console.log(tree.DFSInorder())
// console.log(tree.DFSPreorder())
// console.log(tree.DFSPostorder())

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}