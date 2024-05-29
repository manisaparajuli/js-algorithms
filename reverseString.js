function reverseString (str){
  let reversed = ""
  // for ( let i = 0; i<str.length ; i ++){
  //   reversed = str[i] + reversed
  // }
  // improvised version below
  for(let char of str){
    reversed = char + reversed
  }
  return reversed

  // new and proper way of reversing any string
  // return str.split("").reversed().join("")
  // split("") is converting str to an array whereas join("") is converting back to strung.
}

console.log(reverseString('Helllo'))