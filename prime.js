function prime(n){
  
  for(i=2; i< n-1; i++){
    if(n % i === 0){
      return true
    }else{
      return false
    }
  }
}
console.log(prime(7))