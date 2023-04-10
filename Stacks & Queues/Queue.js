class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(value) {
    let node = new Node(value)
    if (this.length === 0) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    this.length++
    return this
  }

  dequeue() {
    if (this.length === 0) return null
    if (this.length === 1) {
      this.last = null
    }
    this.first = this.first.next
    this.length--
    return this
  }

  peek() {
    return this.first
  }
}

let queue = new Queue()
queue.dequeue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
queue.enqueue(20)
queue.dequeue()
console.log(queue.peek())
console.log(queue)