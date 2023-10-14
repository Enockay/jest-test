const calculator = require("./sum")

//test  multiply
test('multiply 2 *2 to be 4',()=>{
    expect(calculator.multiply(2,2)).toBe(4)
});

//test add
test('add 2 +2 to be 4',()=>{
    expect(calculator.add(2,2)).toBe(4)
});

//test subtract 
test('subtract 4-3 to be 1',()=>{
    expect(calculator.subtract(4,3)).toBe(1)
});

//test factorial
test('factorial 16 to be 2',()=>{
    expect(calculator.factorial(2)).toBe(2)
});

//test for proof
test('power of numbers 2 ** 2 to 4',()=>{
    expect(calculator.power(2,2)).toBe(4)
});