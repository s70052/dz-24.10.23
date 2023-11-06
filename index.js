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

   // Раскидать людей в разные массивы в зависимости от их почты
   let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        email: "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        email: "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        email: "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        email: "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        email: "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
let emails = {
    org: [],
    net: [],
    info: []
}
let other = [
    
]



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


