function cartesianProduct(arrA, arrB){
  let subArr = []
  for(let i = 0; i< arrA.length; i++){
    for(let j = 0; j< arrB.length ; j++){
      subArr.push([arrA[i] , arrB[j]])
    }
  }
  return subArr

}
console.log(cartesianProduct([1,3],[4,6]))