const map = new Map([['a', 2], ['b', 4]])
map.set("c", 3)
map.delete('b')
for (const [key, value] of map){
  console.log(`${key} : ${value}`)
}

console.log(map.has('a'))