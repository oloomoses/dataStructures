const findFuctorialRecursively = (n) => {
  if(n <= 1) {
    return n
  }
  return n * findFuctorialRecursively(n -1)
}

const findFuctorialIteratively = (n) => {
  let res;
  for(let i = 1; i <= n; i++) {
    res *= i
  }
  return res;
}