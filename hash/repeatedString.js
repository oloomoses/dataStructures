const firstOcurrence = array => {
  let myHash = {}
  
  for(let i = 0; i < array.length; i++){
    if(myHash[array[i]]){
      return array[i]
    }

    myHash[array[i]] = i
  }

  return undefined
}

const array = [11, 23, 11, 43, 67, 88, 42, 35, 77, 88, 99, 11]

console.log(firstOcurrence(array))