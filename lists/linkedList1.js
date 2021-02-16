class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value){
    const newNode = {
      value: value,
      next: null
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value){
    const newNode = {
      value: value,
      next: null
    }

    newNode.next = this.head;
    this.head = newNode
    this.length +=1
    return this;
  }

  listValues() {
    let currentNode = this.head
    let arrList = []
    while(currentNode !== null){
      arrList.push(currentNode.value)
      currentNode = currentNode.next

    }
    return arrList;
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null
    }

    let insertPosition = this.traverseToPosition(index -1);
    let nextInsertPos = insertPosition.next
    insertPosition.next = newNode
    newNode.next = nextInsertPos
    this.length += 1;
    return this.listValues
    
  }

  remove(index) {
    let head = this.traverseToPosition(index -1);
    let removed = head.next
    head.next = removed.next
    this.length -= 1;
    return this.listValues
  }

  traverseToPosition(index) {
    let currentNode = this.head

    let counter = 0;
    while (counter !== index){
      currentNode = currentNode.next
      counter += 1
    }
    return currentNode
  }

  reverse() {
    let first = this.head
    this.tail = this.head
    let second = first.next

    while(second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }

    this.head.next = null
    this.head = first
    return this.listValues()
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.append(4);
myLinkedList.insert(2, 55)
myLinkedList.remove(4)

myLinkedList.listValues();
