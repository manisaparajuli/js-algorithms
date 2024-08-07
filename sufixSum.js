const suffixSum = arr => {
    const n = arr.length
    const result = new Array(n)
    // Instead of assigning the first position, we assign the last with the last value of the input array.
    result[n-1] = arr[n-1]

    // Go through the input array, starting in the last position, until the first.
    for( let i = n - 2; i >= 0; i-- )
      //2 , 
        result[i] = result[i+1] + arr[i]
    return result
}

const suffixTestArray = [2, 4, 6, 8]

console.log(suffixSum(suffixTestArray))