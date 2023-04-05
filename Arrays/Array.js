export default class ImplArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  push(item) {
    this.data[this.length] = item
    this.length++
  }

  pop() {
    let item = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return item
  }

  delete(index) {
    let item = this.data[index]
    delete this.data[index]
    this.length--
    this.shiftItems(index)
    return item
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length]
    return true
  }

  unshift(item) {
    // shift array to right
    for (let i = 1; i < this.length + 1; i++) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = item
    this.length++
    return this
  }

  shift() {
    return this.delete(0)
  }
}

let arr = new ImplArray
arr.push("Duy")
arr.push(9)
arr.push('064046')
arr.pop()
arr.delete(1)
arr.unshift("LB")
arr.shift()
console.log(arr);