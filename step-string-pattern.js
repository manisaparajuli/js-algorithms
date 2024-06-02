function steps(n){
  for(let i = 1; i<= n; i++){
    let pattern = ""
    for(let j= 1; j<=n; j++){
      if (j < i){
        pattern += "#"
      }else {
        pattern += " "
      }
    }
    console.log(pattern);
  }
}
steps(5)