function gcdOfStrings(str1, str2) {
    if(str1 + str2 !== str2 + str1) return ""
    let a = str1.length //6
    let b = str2.length //3

    while(b){ 
        let temp = b //temp = 3
        b = a % b  // 6/3 = 0
        a = temp //3
    }
    
    return str1.substring(0, a)
    
};
console.log(gcdOfStrings('ABABABAB', 'ABABAB'))

