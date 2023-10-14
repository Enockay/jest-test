const capitalize = require('./capitalize.js')

test('capitalize abcd to ABCD ',()=>{
    expect(capitalize('abcd')).toEqual('ABCD')
});