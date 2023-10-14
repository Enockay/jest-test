const analyzeItem = require("./analyze.js");


//test sum of items
test('array should give the sum of items in the array',()=>{
    expect(analyzeItem.sumArray([1,2,3,4])).toBe(10)
});

//test for midArray
test('should return the mid of The array',()=>{
    expect(analyzeItem.midOfArray([1,2,3,4,5])).toBe(3)
});

//test for minimum Item
test('should give the smallest items in the array',()=>{
    expect(analyzeItem.minimumItem([1,2,3,4])).toBe(1)
});

//test for average
test('should output average',()=>{
    expect(analyzeItem.average([1,2,3,4])).toBe(2.5)
});

//test for maximum item
test('should output maximum item in array',()=>{
    expect(analyzeItem.maximum([1,2,3,4,5])).toBe(5)
});

