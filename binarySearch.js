function binarySearch(arr, target){
  let leftIndex = 0
  let rightIndex = arr.length - 1
  while( leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if( arr[middleIndex] === target){
      return middleIndex
    }
    if(arr[middleIndex] < target){
      leftIndex = middleIndex + 1
    }else{
      rightIndex = middleIndex - 1
    }
  }
}
console.log(binarySearch([-6, 2, 4, 6, 10], 10))
console.log(binarySearch([-6, 2, 4, 6, 10], 2))
console.log(binarySearch([-6, 2, 4, 6, 10], 6))