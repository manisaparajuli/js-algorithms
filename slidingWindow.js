function slidingWindow(nums, target){
  let n = nums.length;
  let i = 0;
  let j = 0 ;
  let summ = 0;
  let minLength = Infinity;
  
  // Sliding Window
  while(j<n){
    summ += nums[j];
    
    // Summ Decrementing ith Value and incrementing i to next index as long as the sum remains >= target.
    while(summ >= target){
      minLength = Math.min(minLength , j-i+1);
      summ -= nums[i];
      i++;
    }
    j++;
  }
  return minLength === Infinity ? 0 : minLength;

}
console.log(slidingWindow([[1,4,4]], 7))