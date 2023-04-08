class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this.values()
  }

  prepend(value) {
    let _head = new Node(value)
    _head.next = this.head
    this.head = _head
    this.length++
    return this.values()
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value)
    if (index <= 0) return this.prepend(value)
    let node = new Node(value)
    let prevNode = this.getNode(index - 1)
    node.next = prevNode.next
    prevNode.next = node
    this.length++
    return this.values()
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

  remove(index) {
    if (index < 0 || index >= this.length) return ('Index not found')
    let prevNode = this.getNode(index - 1)
    let node = prevNode.next
    prevNode.next = node.next
    node = null
    this.length--
    return this.values()
  }

  reverse() {
    let values = []
    while (this.head !== null) {
      values.push(this.head.value)
      this.head = this.head.next
    }

    this.head = new Node(values[values.length - 1])
    this.tail = this.head
    this.length = 1

    for (let i = values.length - 2; i >= 0; i--) {
      this.append(values[i])
    }

    return this.values()
  }

  reverse2() {
    let prev = null;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    while (node !== null) {
      let temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }
    return this.values();
  }

  values() {
    let values = []
    let _pointer = this.head
    while (_pointer !== null) {
      values.push(_pointer.value)
      _pointer = _pointer.next
    }
    return values
  }
}

let list = new LinkedList(10)
list.prepend(99)
list.append(5)
list.append(16)
list.append(20)
list.prepend(9)
list.insert(6, 999)
list.remove(1)
console.log(list.values())
console.log(list.reverse())
console.log(list.reverse2())

