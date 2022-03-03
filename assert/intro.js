const sum = (a, b) => a + b




const arr1 =  [[1, [2, [3]]], [4, 5], [6, 7, 8], 9]
let result = []
// Рекурсия
function decompressArrReq(inputArr) {
    inputArr.forEach(el => {
        if (Array.isArray(el)) {
            return decompressArrReq(el)
        } else {
            result.push(el)
        }
    })
    return result
}

// Преобразование в строку
function decompressArrStr(inputArr) {
    return inputArr.toString().split(",").map(el => +el)

}
// Flat
function decompressArrFlat(inputArr) {
    return inputArr.flat(Infinity)
}

module.exports = { sum, decompressArrReq, decompressArrStr , decompressArrFlat }


