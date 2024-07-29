function bubbleSort(arr){
  let swap = false;
  // let sortedArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
      swap = true;
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }else{
      swap = false;
    }
  }
  return arr;

}
console.log(bubbleSort([2,1,5,3,6]))