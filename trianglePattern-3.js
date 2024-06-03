function triangleThree(n){
  let count = 1
  let pattern = ""
  for( let row = 1; row <= n; row++ ){
    for(let col=1; col<=row; col++ ){
      pattern += count + " "
      count++
    }
    pattern += "\n"
    
  }
  return pattern
}
console.log(triangleThree(4))