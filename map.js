const map = new Map([["a", 1],["b", 2]])
map.set('c',3)
console.log(map.size)
// map.clear() to clear all data
console.log(map.has("a"))
for(const [key,value] of map){
  console.log(`${key}: ${value}`)
}
