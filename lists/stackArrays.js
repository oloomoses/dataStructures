class Stack {
  constructor() {
    this.array = []
    this.length = 0
  }

  peek() {
    return this.array[this.array.length -1]
  }

  push(value) {
    this.array.push(value)
    this.length += 1
    return this
  }

  pop() {
    this.array.pop()
    
    this.length -= 1
    return this
  }
}


const myStack = new Stack
myStack.push(10)
myStack.push('Oloo')
myStack.push('Cardinal')
// myStack.pop()
myStack.peek()
// myStack.pop()