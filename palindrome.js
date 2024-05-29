// function plindrome(str){
//   let reversedStr = str.split("").reverse().join("")
//   if (str === reversedStr){
//     return true
//   }else{
//     return false
//   }

// }
// console.log(plindrome("kayak"))


// Using two pointer Technique
function palindrome2(str) {
  let start = 0
  let last = str.length - 1
  while (start < last) {
    if (str[start] != str[last]) {
      return false
    }
    else {
      start++
      last--
    }
  }
  return true
}
console.log(palindrome2("kayak"))