function charmap(str){
  let charMap = {}
  str = str.toLowerCase().replace(/[\W]/g,'')
  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

function anagrams(stringA, stringB){
  const carMapA = charmap(stringA)
  const carMapB = charmap(stringB)

}
console.log(anagrams("hello Manisha", "manisha hello"))