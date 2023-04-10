class StackWithArray {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

let stack = new StackWithArray()
stack.pop()
stack.push(5)
stack.push(10)
stack.push(15)
stack.array.push(20)
console.log(stack.peek())
console.log(stack)