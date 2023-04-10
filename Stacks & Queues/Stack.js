class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  push(value) {
    let node = new Node(value)
    if (this.length === 0) {
      this.bottom = node
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }

    this.length++
    return this
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 1) {
      this.bottom = null;
    }
    this.top = this.top.next
    this.length--
    return this
  }

  peek() {
    return this.top
  }
}

let stack = new Stack()
stack.pop()
stack.push(5)
stack.push(10)
stack.push(15)
console.log(stack.peek())
console.log(stack)