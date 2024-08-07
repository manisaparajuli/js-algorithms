function plantFlower(flowerbed, n) {
  
  for(let i=0; i< flowerbed.length && n != 0; i++ ){
    if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
      n--;
      i++;
    }
  }
  return n === 0
};

console.log(plantFlower([1,0,0,0,1], 1))
console.log(plantFlower([1,0,0,0,1], 2))