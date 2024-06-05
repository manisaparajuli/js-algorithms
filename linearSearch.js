function linearSearch(n , arr){
  for (let i = 0; i< arr.length; i ++){
    if (arr[i] === n){
      return i
    } else{
      return -1
    }
  }

}
console.log(linearSearch(4, [1,3,7,2,9,6,8,0]))