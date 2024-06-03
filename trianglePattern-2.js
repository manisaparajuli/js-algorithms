function triangleTwo(n){
  let pattern = 0
  for( let row = 1; row <= n; row++){
    for ( let col = 1; col <= row; col++){
      pattern += row
    }
    pattern += "\n"
  }
  return pattern
}
console.log(triangleTwo(5))