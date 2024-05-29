function maxChar(str){
  let repeatedWord = {}
  let max = 0
  let maxChar = ""
  for (let char of str){
    repeatedWord[char] = repeatedWord[char] + 1 || 1
  }
  for (let key in repeatedWord){
    if(repeatedWord[key] > max){
      max = repeatedWord[key]
      maxChar = key
    }
  }
  return maxChar
}
console.log(maxChar("aaaaabco"))