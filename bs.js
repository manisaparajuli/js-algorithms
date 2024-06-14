function binaryS(arr, target){

  if(arr.length === 0){
    return -1
  }else{
    let mid = Math.floor(arr.length / 2)
    let leftArr = 0
    let rightArr = arr.length -1
    for(let i = 0; i< arr.length; i++){
      if (arr[i] > target){
        leftArr = mid + 1
      }else if(arr[i] == target ){
        return i
      }else{
        rightArr = mid - 1
      }
    }
  }
}

console.log(binaryS([2,3,6,8,9], 9))
//o(logn)