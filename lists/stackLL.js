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

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if(this.bottom === null){
      this.bottom = newNode
      this.top = newNode
    }
    const holdingPointer = this.top
    this.top = newNode
    this.top.next = holdingPointer
    this.length += 1
    return this
  }

  pop() {
    this.top = this.top.next
    
    this.length -= 1
    return this
  }
}

const myStack = new Stack
myStack.push(10)
myStack.push('Oloo')
myStack.push('Cardinal')
myStack.pop()