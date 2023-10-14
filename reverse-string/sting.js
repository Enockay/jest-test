function reverseString(arr){
    let newString = ""
    for(let i = arr.length -1 ; i >= 0; i-- ){
        newString += arr[i]
    }
    return newString;
}

module.exports = reverseString