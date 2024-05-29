function reverseInt(n){
  let reversed = n.toString().split("").reverse().join("")
  return reversed * Math.sign(n)

}
console.log(reverseInt(45))