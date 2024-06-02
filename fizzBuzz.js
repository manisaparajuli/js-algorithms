function fizzBuzz(n){
  const letterToPrint = [];
  for (let i = 1 ; i < n ; i++ ){
    if (i%3 === 0 && i%5 === 0){
      letterToPrint.push("fizzbuzz");
    }else if (i%3 === 0){
      letterToPrint.push("fizz");
    }else if (i%5 === 0){
      letterToPrint.push("buzz");
    }else{
      letterToPrint.push(i)
    }
  }
  return letterToPrint.toString();
  
}
console.log(fizzBuzz(24))