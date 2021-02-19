class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }
  
  peek() {
    return this.first
  }

  enqueue(value) {
    const new_queue = new Node(value)

    if(this.first === null){
      this.first = new_queue
      this.last = this.first
    }
    this.last.next = new_queue
    this.last = this.last.next
    this.count += 1
    return this
  }

  dequeue() {
    if(this.length === 1) {
      this.first = null
    }

    this.first = this.first.next
    this.count -= 1;
    return this
  }
}

myQueue = new Queue

myQueue.enqueue('Maya')
myQueue.enqueue('Naff')
myQueue.enqueue('Moses')
myQueue.dequeue()
myQueue.peek()
