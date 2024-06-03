function reverseTriangle(n){
  let pattern = ""
  for( let i = 0; i <= n; i++){
    for(let j = 1; j <= n - i ; j++){
      pattern += j
    }
    pattern += "\n"
  }
  return pattern
}
console.log(reverseTriangle(5))