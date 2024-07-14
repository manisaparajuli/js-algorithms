function twoSum(nums, target){ 
  let map = new Map();
  for(let i = 0; i<nums.length ; i++){
    const currentNum = nums[i]
    if(map.has(target - currentNum)){
      return [map.get(target-currentNum), i]
    }
    map.set(currentNum, i)

  }
  return []
}

console.log(twoSum([0,2,3,4,5], 6))

//nums[i] =2
//nums[j] =4`