function titlecase(str){
  let words = str.split(" ")
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
console.log(titlecase("hello manisha i am from melbourne"))