function reverseSentence(sentence){
  
  let newSentence = sentence.split(' ');
  let result = '';
  for(let i= newSentence.length-1; i >= 0 ; i--){
    if(newSentence[i]){
      result += (result ? " ": "") + newSentence[i]
    }
    
  }
  
  return result ;

}

console.log(reverseSentence(' have a  good day'))