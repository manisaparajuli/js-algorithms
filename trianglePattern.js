function triangle(n){
  let pattern = 0
  for( let row = 1; row<=n; row++){
    for (let col = 1; col<=row; col++){
      pattern += col;
    }
    pattern += "\n"
  }
  return pattern
}
console.log(triangle(5)) 