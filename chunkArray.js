function chunk(array, size){
  let result = []
  let index = 0
  while (index<array.length){
    result.push(array.slice(index, size+index))
    index += size
  }
  return result
}

console.log(chunk([4,5,6,7,4], 2))