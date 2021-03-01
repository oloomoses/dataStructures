class HashTable  {
  constructor(size){
    this.data = new Array(size)
  }

  _hash(key){
    let hash = 0;
    for(let i = 0; i<key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  get(key){
    const address = this._hash(key)
    const currentItem = this.data[address]
    // console.log(currentItem)

    if(currentItem){
      for(let i = 0; i < currentItem.length; i++){
        if(currentItem[i][0] === key){
          return currentItem[i][1];
        }
        
      }
    }
    return undefined;

  }

  set(key, value){
    let address = this._hash(key);

    if(!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  keys(){
    const keysArray = []

    for(let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}

const myHash = new HashTable(10);

myHash.set('Math', 90)
myHash.set('Science', 50)

// console.log(myHash.get('Science'))
console.log(myHash.keys())