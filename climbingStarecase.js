function climbingStarecase(n){
  let noOfWays = [1, 2]
  for(let i =2; i<= n ; i++){
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
  }
  return noOfWays[n-1]
}
console.log(climbingStarecase(1))
console.log(climbingStarecase(2))
console.log(climbingStarecase(3))
console.log(climbingStarecase(4))
console.log(climbingStarecase(5))