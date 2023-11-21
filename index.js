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
// let arr =[
//     {
//         name:"sardor",
//         age:17,
//         isMarried:false
//     },
//     {
//         name:"sardor ml",
//         age:15,
//         isMarried:false
//     },    {
//         name:"tangir",
//         age:19,
//         isMarried:false
//     },    {
//         name:"ruslan",
//         age:25,
//         isMarried:true
//     },    {
//         name:"allayor",
//         age:25,
//         isMarried:true
//     },    {
//         name:"amira",
//         age:23,
//         isMarried:true
//     },    {
//         name:"dilruh",
//         age:15,
//         isMarried:false
//     },
// ]
// let married =[arr.filter(person => person.isMarried === true).map(person => person.name)]
// let single=[arr.filter(person => person.isMarried === false).map(person => person.name)]
// console.log(married)
// console.log(single)

// let average_age=0

// arr.forEach(person=>{
//     average_age+=person.age
// })
// average_age=average_age/arr.length

// console.log(average_age)

// let car=[{
//     name:"bmw m5",
//     engine:"бензиновыми двигателями рабочим объёмом 3453-4999 см3",
//     year_of_issue:1998,
//     beaten: false,
//     price: 37000,
//     color:"black",
//     company:"BMW",
//     tech_passport: {
//         date: 2022,
//         exp_date: 2032,
//     }

// }
// ]






// let cars = [
//     {
//         model: "malibu",
//         company: "general motors",
//         color: "dry asphalt",
//         engine: 2.4,
//         price: 30000,
//         beaten: false,
//         year: 2022,
//         mileage: 1000,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2032,
//         }
//     },
//     {
//         model: "tracker",
//         company: "general motors",
//         color: "black",
//         engine: "2.2",
//         price: 22000,
//         beaten: false,
//         year: 2021,
//         mileage: 2000,
//         tech_passport: {
//             date: 2021,
//             exp_date: 3031
//         }
//     },
//     {
//         model: "gentra",
//         company: "general motors",
//         color: "black",
//         engine: 1.5,
//         price: 17000,
//         beaten: false,
//         year: 2021,
//         mileage: 6000,
//         tech_passport: {
//             date: 2021,
//             exp_date: 2031,
//         }
//     },
//     {
//         model: 'cobalt',
//         company: 'general motors',
//         engine: 1.5,
//         price: 15000,
//         beatan: true,
//         year: 2022,
//         mileage: 13000,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2032,
//         }

//     },
//     {
//         model: 'Damas',
//         company: 'Chevrolet',
//         color: 'White',
//         engine: 2.4,
//         price: 10000,
//         beaten: false,
//         year: 2023,
//         mileage: 100,
//         tech_pasport: {
//             date: 2023,
//             exp_date: 2033
//         }
//     },
//     {
//         model: "Spark",
//         company: "general motors",
//         color: "dirtygreen",
//         engine: 1.250,
//         price: 7000,
//         beaten: true,
//         year: 2008,
//         mileage: 328000,
//         tech_passport: {
//             date: 2008,
//             exp_date: 2023,
//         }
//     },
//     {
//         model: "bmw m5",
//         engine: "бензиновыми двигателями рабочим объёмом 3453-4999 см3",
//         year_of_issue: 1998,
//         beaten: false,
//         price: 37000,
//         color: "black",
//         company: "BMW",
//         tech_passport: {
//             date: 2022,
//             exp_date: 2032,
//         }


// },
//     {
//         model: "Labo",
//         company: "GM ",
//         color: "white",
//         engine: 0.8,
//         price: 10000,
//         beaten: false,
//         year: 2023,
//         mileage: 0,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     },
//     {
//         model: "tico",
//         company: "daewoo",
//         color: "black",
//         engine: 1.5,
//         price: 10000,
//         beaten: true,
//         year: 2010,
//         mileage: 1000,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2025,
//         }
//     },
//     {
//         model: 'traverse',
//         company: 'chevrolet',
//         color: 'black',
//         engine: 3.6,
//         price: 60000,
//         beaten: false,
//         year: 2023,
//         mileage: 500,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033
//         }
//     },
//     {
//         model: "volga",
//         company: "uaz",
//         color: "white",
//         engine: 0.4,
//         price: 700000,
//         beaten: true,
//         year: 1964,
//         mileage: 3000000,
//         tech_passport: {
//             date: 1964,
//             exp_date: 2023,
//         }
//     },
//     {
//         model: "ВАЗ 2106",
//         company: "ВАЗ",
//         color: "dry asphalt",
//         engine: 1.5,
//         price: 3000,
//         beaten: true,
//         year: 1995,
//         mileage: 100000,
//         tech_passport: {
//             date: 1996,
//             exp_date: 2026,
//         }
//     },
//     {
//         model: "velik",
//         company: "Philips",
//         color: "red",
//         engine: "v12",
//         price: 12000,
//         beaten: false,
//         year: 2009,
//         mileage: 0,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2032,
//         }
//     },
//     {
//         model: 'Tahoe',
//         company: 'CHEVROLET',
//         color: 'black',
//         engine: 5.3,
//         price: 110000,
//         beaten: false,
//         year: 2022,
//         mileage: 0,
//         tech_passport: {
//             date: 2022,
//             expDate: 2032
//         }
//     },
//     {
//         model: "Mercedes-Benz CLS",
//         company: "Mercedes-Benz",
//         color: "black",
//         engine: 3.0,
//         price: 110000,
//         beaten: false,
//         year: 2023,
//         mileage: 200,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     },
//     {
//         model: "malibu",
//         company: "Chevrolet",
//         color: "sky rim",
//         engine: 2.4,
//         price: 15000,
//         year: 2022,
//         clash: false,
//         mileage: 1500,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2054
//         }
//     },
//     {
//         model: "matiz",
//         company: "general motors",
//         color: "yellow",
//         engine: 0.8,
//         price: 4000,
//         beaten: false,
//         year: 2018,
//         mileage: 5000,
//         tech_passport: {
//             date: 2018,
//             exp_date: 2028,
//         }
//     },
//     {
//         model: "porter",
//         company: "hyundai",
//         color: "blue",
//         engine: 2.5,
//         price: 31000,
//         beaten: false,
//         year: 2023,
//         mileage: 100,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     },
//     {
//         year: 2023,
//         price: 85000,
//         engine: 6.5,
//         Mileage: 11.29,
//         beaten: false,
//         color: "black"
//     }
// ]


// let from = prompt('from')
// let up = prompt('up')


// let result = []

// cars.forEach(car => {
//     if(car.price >= from && car.price <= up) {
//         result.push(`model: ${car.model}, price: ${car.price} \n`)
//     }
// })


// let oneOfThem = prompt('По вашей ценовой категории найдено вот эти машины ' + result + " Выберите один из этого списка написав название машины");
// let findedCar = cars.find((item) => item.model === oneOfThem)
// let answer = confirm(`Ты хочешь купить: ${oneOfThem}`)

// let userMoney = prompt('Сколько у вас денег ?')

// if (userMoney < findedCar.price) {
//  alert('Недостаточно средств ')
// } else if (userMoney > findedCar.price) {
//   let remaining = userMoney - findedCar.price
//   alert(`Ваша сдача: ${remaining}`)
// } else if (userMoney===findedCar.price){
//   alert('Поздравляем ')
// }


// let cars = [{
//         model: 'cobalt',
//         company: 'general motors',
//         engine: 1.5,
//         price: 15000,
//         beatan: true,
//         year: 2022,
//         mileage: 13000,


// tech_passport: {
//             date: 2022,
//             exp_date: 2032,
//         }
//     },
//     {
//         model: "malibu",
//         company: "general motors",
//         color: "dry asphalt",
//         engine: 2.4,
//         price: 30000,
//         beaten: false,
//         year: 2022,
//         mileage: 1000,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2032,
//         }
//     },
//     {
//         model: "tracker",
//         company: "general motors",
//         color: "black",
//         engine: "2.2",
//         price: 22000,
//         beaten: false,
//         year: 2021,
//         mileage: 2000,
//         tech_passport: {
//             date: 2021,
//             exp_date: 3031
//         }
//     },
//     {
//         model: "gentra",
//         company: "general motors",
//         color: "black",
//         engine: 1.5,
//         price: 17000,
//         beaten: false,
//         year: 2021,
//         mileage: 6000,
//         tech_passport: {
//             date: 2021,
//             exp_date: 2031,
//         }
//     },
//     {
//         model: 'Damas',
//         company: 'Chevrolet',
//         color: 'White',
//         engine: 2.4,
//         price: 10000,
//         beaten: false,
//         year: 2023,
//         mileage: 100,
//         tech_pasport: {
//             date: 2023,
//             exp_date: 2033
//         }
//     },
//     {
//         model: "Spark",
//         company: "general motors",
//         color: "dirtygreen",
//         engine: 1.250,
//         price: 7000,
//         beaten: true,
//         year: 2008,
//         mileage: 328000,
//         tech_passport: {
//             date: 2008,
//             exp_date: 2023,
//         }
//     },
//     {
//         model: "Labo",
//         company: "GM ",
//         color: "white",
//         engine: 0.8,
//         price: 10000,
//         beaten: false,
//         year: 2023,
//         mileage: 0,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     },
//     {
//         model: "tico",
//         company: "daewoo",
//         color: "black",
//         engine: 1.5,
//         price: 10000,
//         beaten: true,
//         year: 2010,
//         mileage: 1000,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2025,
//         }
//     }, {
//         model: 'traverse',
//         company: 'chevrolet',
//         color: 'black',
//         engine: 3.6,
//         price: 60000,
//         beaten: false,
//         year: 2023,
//         mileage: 500,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033
//         }
//     }, {
//         model: "volga",
//         company: "uaz",
//         color: "white",
//         engine: 0.4,
//         price: 700000,
//         beaten: true,
//         year: 1964,
//         mileage: 3000000,
//         tech_passport: {
//             date: 1964,
//             exp_date: 2023,
//         }
//     }, {
//         model: "velik",
//         company: "Philips",
//         color: "red",
//         engine: "v12",
//         price: 12000,
//         beaten: false,
//         year: 2009,
//         mileage: 0,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2032,
//         }
//     }, {
//         model: "Porter",
//         company: "Hyundai",
//         color: "black",
//         engine: 2.5,
//         hp: 145,
//         price: 31000,
//         beaten: false,
//         fuel_comsumption: 10.2,
//         year: 2023,
//         mileage: 100,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     }, {
//         model: 'Tahoe',
//         company: 'CHEVROLET',
//         color: 'black',
//         engine: {
//             capacity: '5.3',
//             horsePower: '343hp'
//         },
//         price: 110000,
//         beaten: false,
//         year: 2022,
//         mileage: 0,
//         tech_passport: {
//             date: 2022,
//             expDate: 2032
//         }
//     }, {
//         model: "Mercedes-Benz CLS",
//         company: "Mercedes-Benz",
//         color: "black",
//         engine: 3.0,
//         price: 110000,
//         beaten: false,
//         year: 2023,
//         mileage: 200,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     }, {
//         model: "malibu",
//         company: "Chevrolet",
//         color: "sky rim",
//         engine: 2.4,
//         price: 15000,
//         year: 2022,


//         mileage: 1500,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2054
//         }
//     }, {
//         model: "matiz",
//         company: "general motors",
//         color: "yellow",
//         engine: 0.8,
//         price: 4000,
//         beaten: false,
//         year: 2018,
//         mileage: 5000,
//         tech_passport: {
//             date: 2018,
//             exp_date: 2028,
//         }
//     }, {
//         model: "porter",
//         company: "hyundai",
//         color: "black",
//         engine: 2.5,
//         hp: 145,
//         price: 31000,
//         beaten: false,
//         fuel_comsumption: 10.2,
//         year: 2023,
//         mileage: 100,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     }, {
//         model: 'bmw_x7',
//         year: 2023,
//         price: 85000,
//         engine: 6.5,
//         Drivetrain: "All Wheel Drive",
//         Transmission_Order_Code: "2TB",
//         engine: "3000cc",
//         power: "375Bhp",
//         Seating_Capacity: 6,
//         Mileage: "11.29 - 14 kmpl",
//         Fuel: "diesel",
//         horsepower: 1000,
//         beaten: false,
//         color: "black"
//     }
// ]
// let a =2020
// let currYear =2023
// if(cars.year >=a && cars.year <=currYear){

// }
// console.log(cars)


// Отфильтровать задачи в переменные а и b
// Сохранить количество в ключе count
// Сохранить сами задачи в массиве-ключе arr
//     let arr = [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "delectus aut au`tem",
//             completed: false
//         },
//         {
//             "userId": 1,
//             "id": 2,
//             "title": "quis ut nam facilis et officia qui",
//             completed: false
//         },
//         {
//             "userId": 1,
//             "id": 3,
//             "title": "fugiat veniam minus",
//             completed: false
//         },
//         {
//             "userId": 1,
//             "id": 4,
//             "title": "et porro tempora",

//             completed: true
//         },
//         {
//             "userId": 1,
//             "id": 5,
//             "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//             completed: false
//         },
//         {
//             "userId": 1,
//             "id": 6,
//             "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//             completed: false
//         },
//         {
//             "userId": 1,
//             "id": 7,
//             "title": "illo expedita consequatur quia in",
//             completed: false
//         },
//         {
//             "userId": 1,
//             "id": 8,
//             "title": "quo adipisci enim quam ut ab",
//             completed: true
//         },
//         {
//             "userId": 1,

//             "id": 9,
//             "title": "molestiae perspiciatis ipsa",
//             completed: false
//         },
//         {
//             "userId": 1,
//             "id": 10,
//             "title": "illo est ratione doloremque quia maiores aut",
//             completed: true
//         },
//     ]


//     let a = {
//         count: 0,
//         arr: []
//     }

//     let b = {
//         count: 0,
//         arr: []
//     }

// a.arr = arr.filter((item)=>item.completed ===true)
// b.arr =arr.filter((item)=>item.completed ===false)

// a.count = a.arr.length
// b.count = b.arr.length


// console.log(a)
// console.log(b)

// arr.push()

//    Раскидать людей в разные массивы в зависимости от их почты
//    let users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         email: "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         email: "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         email: "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         email: "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         email: "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         email: "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         email: "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         email: "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         email: "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         email: "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]
// let emails = {
//     org: [],
//     net: [],
//     info: []
// }
// let other = []



// for (let i = 0; i < users.length; i++) 
// if(users[i].email.includes('.net')){
// emails.net.push(users[i])
// }else if(users[i].email.includes('.org')){
// emails.org.push(users[i])
// } else if (users[i].email.includes('.info')){
// emails.info.push(users[i])
// }
// console.log(emails)





// for(let i of users){
// if(i.email.includes('.net')){
// emails.net.push(i) 
// }else if(i.email.includes('.org')){
// emails.org.push(i)
// }else if ( i.email.includes('.info')){
// emails.info.push(i)
// }
// }
// console.log(emails)



// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(i + "*" + j + "=" + (i*j));
//     }
//   }

//   for (let i = 1; i <= 10; i++) {
//     console.log(`7*${i} =${i*7}`)
// }



// let pwd 

// do {
//     pwd =+prompt('Введите пароль')
// }while(pwd!==7777)





// let number =0
// let item
// do{
// item=prompt('jijfowe')
// number++
// }while(number<3)

// let pwd
// let n = 0

// while( n < 3){
// pwd = +prompt("password")
// if(pwd !== 7777){
// n++
// }
// else{
// alert("welcome")
// break
// }
// }

// let products = [
//   {
//       name: "soda",
//       price: 10000,
//       godno: 2040
//   },
//   {
//       name: "chocolate",
//       price: 8000,
//       godno: 2024
//   },
//   {
//       name: "ice cream",
//       price: 13000,
//       godno: 2023
//   },
//   {
//       name: "yogurt",
//       price: 9000,
//       godno: 2023
//   },
//   {
//       name: "lienergy",
//       price: 21000,
//       godno: 2024
//   },
//   {
//       name: "fusetea",
//       price: 7000,
//       godno: 2024
//   },
//   {
//       name: "lays",
//       price: 18000,
//       godno: 2023
//   },
//   {
//       name: "18+",
//       price: 8000,
//       godno: 2024
//   },
//   {
//       name: "namak",
//       price: 2000,
//       godno: 2024
//   },
//   {
//       name: "orange juice",
//       price: 10000,
//       godno: 2024
//   },
//   {
//       name: "clear man",
//       price: 50000,
//       godno: 2025
//   },
//   {
//       name: "saxar",
//       price: 12000,
//       godno: 2025
//   },
//   {
//       name: "moloko",
//       price: 11000,
//       godno: 2023
//   },
//   {
//       name: "pechenki",
//       price: 15000,
//       godno: 2024
//   },
//   {
//       name: "muka",
//       price: 150000,
//       godno: 2024

//   },
// ]

// let discount = +prompt('discount %')

// for(let item of products) {
// console.log( item.price -(item.price / 100 *discount))
// }

// let people = [
//   {
//       name: "bobur",
//       age: 43,
//       isMarried: false,
//       wifes: ['kamila', 'safir', 'allayor']
//   },
//   {
//       name: "ismail",
//       age: 12,
//       isMarried: true,
//       wifes: ['nikita', 'malika']
//   },
//   {
//       name: "allayor",
//       age: 14,
//       isMarried: true,
//       wifes: ['denis', 'dima', 'dimon', 'xbegim']
//   },
//   {
//       name: "sarodr ml",
//       age: 18,
//       isMarried: false,
//       wifes: ['safiya']
//   },
//   {
//     name: "sarodr st",
//     age: 19,
//     isMarried: false,
//     wifes: ['safiya']
// },
// ]
// let guilties = []
// let not_guilty =[]

// for(let i of people){
// if(i.age <18 || i.wifes.length >1 ){
// guilties.push(i)
// } else{
// not_guilty.push(i)
// }
// }

// console.log(guilties)
// console.log(not_guilty)




// for (let i = 0; i < people.length; i++){
// if(people[i].age < 18 || people[i].wifes.length >1){
// guilties.push(people[i])
// } else{
// not_guilty.push(people[i])
// }

// }
// console.log(guilties)
// console.log(not_guilty)

// let products = [
//     {
//      name: "moloko",
//      type: "milk",
//      price: 12000
//     },
//     {
//      name: "apple",
//      type: "fruit",
//      price: 20000
//     },
//     {
//      name: "sakura",
//      type: "alcohol",
//      price: 20000
//     },
//     {
//      name: "yogurt",
//      type: "milk",
//      price: 8000
//     },
//     {
//      name: "banan",
//      type: "fruit",
//      price: 25000
//     },
//     {
//      name: "pivo",
//      type: "alcohol",
//      price: 14000
//     },
//     {
//      name: "tvorog",
//      type: "milk",
//      price: 11000
//     },
//     {
//      name: "alphapvp",
//      type: "alcohol",
//      price: 80000
//     },
//     {
//      name: "konyak AMIR",
//      type: "alcohol",
//      price: 1000
//     },
//     {
//      name: "smetana",
//      type: "milk",
//      price: 12500
//     },
//  ]


//  let categories = [
//      {
//          type: "milk",
//          amount: 0
//      },
//      {
//          type: "alcohol",
//          amount: 0
//      },
//      {
//          type: "fruit",
//          amount: 0
//      },
//  ]


//  for (let i = 0; i < products.length; i++){
//     for (let j = 0; j < categories.length; j++){
//         if(products[i].type===categories[j].type){
// categories[j].amount++
//  }
//     }
//  }


// console.table(categories)

// for (let i = 1; i <= 10; i++) {
//         for (let j = 1; j <= 10; j++) {
//           console.log(i + "*" + j + "=" + (i*j));
//         }
//       }

//   for (let i=5;i>0;i--){
//     for(let k=0; k<i;k++){
//         document.write(`*`)
//     }
//     document.write(`<br/>`)
//   }

// let arr = [
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
// ]

// let categories = [
//     {
//         course: ' SMM',
//         count: 0
//     },
//     {
//         course: 'PROGRAMMING',
//         count: 0
//     },
//     {
//         course: '     3DSMAX',
//         count: 0
//     },
//     {
//         course: ' DIZAYN',
//         count: 0
//     },
//     {       
//         course: '   BACKEND',
//         count: 0
//     },
// ]

// for(let i of arr){
// for(let item of categories){
// if(i.info.faculity.toUpperCase()===item.course.trim().toUpperCase()){
// item.count++
// }
// }
// }
// console.log(categories)

// for (let i = 0; i < arr.length; i++){
// let item = arr[i]
// for (let k = 0; k < categories.length; k++){
// let i =categories[k]
// if(item.info.faculity.toUpperCase()===i.course.trim()){
// i.count++

// }
// }
// }
// console.log(categories)

// let companies = [
//     {
//         id: Math.random(),
//         name: "wepro",
//         tax: 12,
//         budget: 10000,
//         expensesPerYear: [4000, 2000, 3000] 
//     },
//     {
//         id: Math.random(),
//         name: 'Allayor',
//         tax: 12,
//         budget: 200,
//         expensesPerYear: [150, 300, 700]
//     },
//     {
//         id: Math.random(),
//         name: "Daler-Xrust",
//         tax: 10,
//         budget: 50000,
//         expensesPerYear: [12000, 20000, 5000]
//     },
//     {
//         id: Math.random(),
//         name: 'Luchshiy Productoviy',
//         tax: 20,
//         budget: 23000,
//         expensesPerYear: [2000, 1000, 5000]
//     },
//     {
//         id: Math.random(),
//         name: "dilrukh salon",
//         tax: 4,
//         budget: 32000,
//         expensesPerYear: [12000, 10000, 10000]
//     },
//     {
//         id: Math.random(),
//         name: "Necromantiya",
//         tax: 10,
//         budget: 30000,
//         expensesPerYear: [1200,3444,4666]
//     },
//     {
//         id:Math.random(),
//         name:'Artyomida.uz',
//         tax:15,
//         budget:100000,
//         expensesPerYear:[10000,3000,90000]
//     },
//     {
//         id: Math.random(),
//         name: "bmw",
//         tax: 13, 
//         budget: 13000, 
//         expensesPerYear: [3000, 4000, 1000]
//     },
//     {
//         id: Math.random(),
//         name: "dizayner",
//         tax: 12,
//         budget: 20000,
//         expensesPerYear: [1000, 100, 200]
//     },
//     {
//         id:Math.random(),
//         name: 'Amerika_cherez_mexika',
//         tax: 0,
//         budget: 15000,
//         expensesPerYear: [100,4000]
//     },
//     {
//         id: Math.random(),
//         name: 'Gradus MMM',
//         tax: 12,
//         budget: 250000,
//         expensesPerYear: [20000, 50000, 15000]
//     },
//     {
//         id:Math.random(),
//         name:"Tangir Company",
//         tax: 100,
//         budget: 1000000,
//         expensesPerYear: [10000,12000,20000]
//     },
//     {
//         id: Math.random(),
//         name: "film_for_adults",
//         tax: 75,
//         budget: 50000,
//         expensesPerYear: [15000, 10000, 5000]
//     }
// ]
// let v_pluse=[]
// let v_minuse=[]
// for(let item of companies){
// item.new_key =0
// for(let num of item.expensesPerYear){
// item.new_key += num/12
// }
// let tax_sum=item.tax*(item.budget/12)/100
// item.total=(item.budget/12)-(item.new_key+tax_sum)
// if(item.total>0){
// v_pluse.push(item.name)
// }else{
// v_minuse.push(item.name)
// }
// }
// console.log(companies)
// console.log("в плюсе" + " "+ v_pluse )
// console.log("в минусе" +  " " + v_minuse )

// function checkName(name){
// if(name.charAt().toLowerCase()==='a'){
//    console.log(name)
// }
// }

// checkName('alex')
// checkName('safir')
// checkName('Amira')



let s = prompt("cколько тебе лет")
function checkAge() {
    if (s >= 18) {
        alert('добро пожаловать')
    } else if (s < 18 && s >= 0) {
        alert(' повзрослей')
    } else if (s < 0) {
        alert('дебил')
    } else {
        alert('дебил')
    }

}
checkAge()






// let a = prompt('сколько тебе лет')
//     if (a >= 18) {
//         alert('добро пожаловать')
//     } else if (a < 18) {
//         alert(' повзрослей')
//     } else if (a<0 ){
//         alert('дебил')
//     } else{
//         alert('дебил')
//     }



function maxName(name1, name2, name3) {

    let names = [name1, name2, name3];
    let maxLength = Math.max(name1.length, name2.length, name3.length);
    let maxNames = names.filter(name => {
        if (name.length === maxLength) {
            console.log(maxNames);
        }

    }
    );



}
maxName('Alex', 'George', 'Michael');




function proportion(a, b, c) {
    console.log(a * c / b);
}

proportion(2, 4, 6)






