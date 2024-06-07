function insertionSort(arr){
  for(let i = 1; i<arr.length; i++){
    let sorted = i-1
    let numberToSort = arr[i]
    while(sorted >= 0 && arr[sorted] > numberToSort){
      arr[sorted+1] = arr[sorted]
      sorted = sorted -1
    }
    arr[sorted + 1] = numberToSort
  }
}

const arr = [-6,-8,20,8,-2,4, 7]
insertionSort(arr)
console.log(arr)