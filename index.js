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

// let object ={
    
//    name:"jiguli",
// age:1800,
// marka:"LADA (ВАЗ)",
// countries:"russia",
// Production_year:1970,
 
    
// }

// let new_object={

//     name:"sardor",
//     surname:"xotamov",
//     age:17
// }

// let obj=Object.assign({},{new_object,object})
// console.log(obj)


// let keys =Object.keys(obj)
// console.log(keys)
// let news=Object.values(obj)
// console.log(news)
// let concat =news.concat(keys)
// console.log(concat)

// let arr =[38,"sardor",795,"petya" ,'sardor', 'xotamov', 17, 'name', 'age', 'marka', 'countries', 'Production_year']

// let num =arr.filter(item => typeof item==='number')
// console.log(num)
// let str =arr.filter(item=> typeof item==='string')
// console.log(str)

// let object ={
    
//    name:"jiguli",
// age:1800,
// marka:"LADA (ВАЗ)",
// countries:"russia",
// Production_year:1970,

// }
// let arr ="name"

// console.log(
//     object[arr]
// )

// let user = {
//     name: "Ismail",
//     surname: "Adams",
//     age: 12,
//     school: 9,
//     address: "new york",
//     passport: {
//         serries: "AC",
//         numbers: 12324124,
//         date: 2027,
//         date_exp: 2037,
//         visas: ['italy', 'usa', 'russia', 'UAE']
//     },
//     wifes: ['tangir', 'mohinur', 'olesya', 'allayor'],
// }

// const car = {
//     marka: "gm",
//     model: "malibu",
//     price: 33000,
//     engine: 2.4,
//     wheels: 5,
//     color: "white",
// }

// let types = {
//     string: [],
//     number: [],
//     boolean: []
// }

// let new_object = Object.assign({}, user, {car})
// let keys = Object.keys(new_object)
// let values = Object.values(new_object)
// let arr = keys.concat(values)

// arr.forEach((item)=>{
//     let type =typeof(item)
//  if(types[type]){
//     types[type].push(item)
//  }

// })
let arr =[
    {
        name:"sardor",
        age:17,
        isMarried:false
    },
    {
        name:"sardor ml",
        age:15,
        isMarried:false
    },    {
        name:"tangir",
        age:19,
        isMarried:false
    },    {
        name:"ruslan",
        age:25,
        isMarried:true
    },    {
        name:"allayor",
        age:25,
        isMarried:true
    },    {
        name:"amira",
        age:23,
        isMarried:true
    },    {
        name:"dilruh",
        age:15,
        isMarried:false
    },
]
let married =[arr.filter(person => person.isMarried === true).map(person => person.name)]
let single=[arr.filter(person => person.isMarried === false).map(person => person.name)]
console.log(married)
console.log(single)

let average_age=0

arr.forEach(person=>{
    average_age+=person.age
})
average_age=average_age/arr.length

console.log(average_age)




