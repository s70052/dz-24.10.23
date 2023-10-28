// let arr = ['hello', 1234, '', false, NaN, 123, true, ' ', null]
// let trueElems = [arr.filter(elem => Boolean(elem))]
// console.log(trueElems)

// let car ={
// name:"jiguli",
// age:1800,
// marka:"LADA (ВАЗ)",
// countries:"russia",
// Production_year:1970,
// horsepower:{
//     min:1294,
//     max:1569,
// },
// Number:"AA777A",
// speed:142,
// engine:"ВАЗ2101 бензиновый двигатель объемом 1.2 литра и мощностью 59 л. с.",
// }

let object ={
    
   name:"jiguli",
age:1800,
marka:"LADA (ВАЗ)",
countries:"russia",
Production_year:1970,
 
    
}

let new_object={

    name:"sardor",
    surname:"xotamov",
    age:17
}

let obj=Object.assign({},{new_object,object})
console.log(obj)


let keys =Object.keys(object)
console.log(keys)
let news=Object.values(new_object)
console.log(news)
let concat =news.concat(keys)
console.log(concat)

let arr =[38,"sardor",795,"petya" ,'sardor', 'xotamov', 17, 'name', 'age', 'marka', 'countries', 'Production_year']

let num =arr.filter(item => typeof item==='number')
console.log(num)
let str =arr.filter(item=> typeof item==='string')
console.log(str)





