const add = (a,b) => {
    return a + b
}
const subtract = (a,b) => {
    return a - b
}
const multiply = (a,b) => {
    return a * b 
}
const power = (a,b) => {
    return a**b
}
const divide = (a,b) =>{
    return a/b
}

const factorial = (num) =>{
  if(num === 0)
  return 1;

  let x = num-1;
  if(x > 1){
    num *= x;
    x--

  }
  return num
}




module.exports = {
     add,
     subtract,
     multiply,
     power,
     divide,
     factorial
}