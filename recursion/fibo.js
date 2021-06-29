const fiboRecursively = (n) => {
  if(n < 2) {
    return n;
  }
  
  return fiboRecursively(n-1) + fiboRecursively(n-2);

}

const fiboIteratively = (n) => {
  let array = [0, 1]
  if(n < 2) {
    return 1
  }

  for(let i = 2; i <= n; i++) {
    array.push(array[i-1] + array[i-2])
  }


  return array(n)
  
}