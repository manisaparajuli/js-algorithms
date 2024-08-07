function productArray(nums){
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate the product of all elements to the left of each element
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Calculate the product of all elements to the right of each element
  // and multiply it with the current value in the answer array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
}

console.log(productArray([1,2,3,4]))