class QueueWithStack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(value) {
    if (this.length === 0) {
      this.first = []
    }
    this.first.push(value)
    this.last = value
    this.length++
    return this
  }

  dequeue() {
    if (this.length === 0) return null
    if (this.length === 1) {
      this.last = null
    }
    this.first.reverse().pop()
    this.first.reverse()
    this.length--
    return this
  }

  peek() {
    if (this.length === 0) return null
    return this.first[0]
  }
}

let queue = new QueueWithStack()
queue.dequeue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
queue.enqueue(20)
queue.dequeue()
console.log(queue.peek())
console.log(queue)