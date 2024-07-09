function isAnagram(s, t){
  if(s.length !== t.length) return false;
  let sMap = {}
  let tMap = {}
  for(let i = 0; i<s.length; i++){
    sMap[s[i]] = 1+ (sMap[s[i]] || 0)
    tMap[t[i]] = 1+ (tMap[t[i]] || 0)
  }
  for (const key in sMap){
    if(sMap[key] !== tMap[key]){
      return false
    }
  }
  return true;
}

console.log(isAnagram("potato", "tpotao"))