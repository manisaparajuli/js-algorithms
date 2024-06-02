function vawels(str){
  const vowelsToCount = ['a', 'e', 'i', 'o', 'u'];
  let currentCount = 0

  for(let letter of str){
    if (vowelsToCount.includes(letter) ){
      currentCount += 1
    }
  }
  return currentCount
}
console.log(vawels("manisha parajuli"))