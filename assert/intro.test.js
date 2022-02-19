const { sum , decompressArrReq, decompressArrStr , decompressArrFlat } = require("./intro")
const arr1 =  [[1, [2, [3]]], [4, 5], [6, 7, 8], 9]
test("sum should return num of two values", () =>{
    expect(sum(1,3)).toBe(4)
})

test("Arrays should be equal", () =>{
    expect(decompressArrReq(arr1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
test("Arrays should be equal", () =>{
    expect(decompressArrStr(arr1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
test("Arrays should be equal", () =>{
    expect(decompressArrFlat(arr1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})