class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BSTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const new_node = new Node(value)
    if(this.root === null) {
      this.root = new_node
    } else {
      let currentNode = this.root;
      while(true) {
        if(value > currentNode.value) {
          // go right
          if(!currentNode.right) {
            currentNode.right = new_node;
            return this;
          }
          currentNode = currentNode.right;

        } else {
          // go left
          if (!currentNode.left) {
            currentNode.left = new_node;
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }

  }

  lookup(value) {
    if(!this.root) {
      return false
    }

    let currentNode = this.root;

    while(currentNode) {
      if(value > currentNode.value) {
        // check right 
        currentNode = currentNode.right
      } else if(value < currentNode.value) {
        // check left 
        currentNode = currentNode.left
      } else if(currentNode.value === value) {
        return currentNode.value
      }
    }

    return null;
  }

}