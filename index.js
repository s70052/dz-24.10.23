let arr = ['hello', 1234, '', false, NaN, 123, true, ' ', null]
let trueElems = [arr.filter(elem => Boolean(elem))]
console.log(trueElems)


