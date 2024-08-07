function greatest(candies, extraCandies){
  let maxCandies = Math.max(...candies)
  let result = [];
  for(let i = 0; i< candies.length; i++){
    if(candies[i] + extraCandies >= maxCandies){
      result.push(true)
    }else{
      result.push(false)
    }
  }
  return result;
}
console.log(greatest([2,3,4,2,5,7], 3))