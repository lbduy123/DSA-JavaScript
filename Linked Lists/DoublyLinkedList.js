class DoublyNode {
  constructor(value) {
    this.value = value;
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value)
    this.tail = this.head
    this.length = 1
  }

  values() {
    let pointer = this.head
    let arr = []
    while (pointer !== null) {
      arr.push(pointer.value)
      pointer = pointer.next
    }
    return arr
  }

  getNode(index) {
    let node = this.head
    let i = 0
    while (node !== null) {
      if (i === index) {
        return node
      }
      node = node.next
      i++
    }
    return null
  }

  append(value) {
    let node = new DoublyNode(value)
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
    this.length++
    return this.values()
  }

  prepend(value) {
    let node = new DoublyNode(value)
    node.next = this.head
    this.head.prev = node
    this.head = node
    this.length++
    return this.values()
  }

  insert(index, value) {
    if (index <= 0) this.prepend(value)
    if (index >= this.length) this.append(value)
    let node = new DoublyNode(value)
    let prevNode = this.getNode(index - 1)
    node.prev = prevNode
    node.next = prevNode.next
    prevNode.next = node
    this.length++
    return this.values()
  }

  remove(index) {
    if (index < 0 || index >= this.length) return ('Index not found')
    let prevNode = this.getNode(index - 1)
    prevNode.next.next.prev = prevNode
    prevNode.next = prevNode.next.next
    this.length--
    return this.values()
  }
}

let list = new DoublyLinkedList(5)
list.append(10)
list.append(15)
list.prepend(0)
list.insert(2, 9)
list.remove(2)
console.log(list.values())
console.log(list.getNode(1))