// let a=document.querySelector('#num')
// let value = 0

// let b = document.querySelector('.plus')
// let c = document.querySelector('.obnulit')
// let d = document.querySelector('.q')
// let m = document.querySelector('.random')

// b.onclick = () => {
//     if (value >= 0 && value < 10) {
//         value++
//         a.innerHTML = value
//     }
// }
// d.onclick = () => {
//     if (value > 0) {
//         value--
//         a.innerHTML= value
//     }
// }

// c.onclick = () => {
//     value = 0
//     a.innerHTML = value
// }

// m.onclick = () => {
//     let randomId = Math.round(Math.random() * 10)
//     a.innerHTML= randomId
// }
let a = document.querySelector('.d')
let b = document.querySelector('.k')
let d = document.querySelector('#black-button')
let c = document.querySelector('#white-button')
let m =document.querySelector('#blue-button')
let k =document.querySelector('.wvrldc')
let h =document.querySelector('.eakmvkdc')

d.onclick = () => {
    a.style.display = 'block'
    b.style.display = 'none'
    d.style.border ='3px solid blue'
    c.style.border ='none'
    m.style.border ='none'
}

c.onclick = () => {
    b.style.display = 'block'
    a.style.display = 'none'
    c.style.border ='3px solid blue'
    m.style.border ='none'
    d.style.border ='none'
}
m.onclick=()=>{
    a.style.display = 'none'
    b.style.display = 'none'
    k.style.display ='block'
    m.style.border ='3px solid blue'
    c.style.border ='none'
    d.style.border ='none'
}
h.onmouseenter = () =>{
h.classList.toggle('active')

}

let s =document.querySelector('.btn4')
s.onclick =()=>{
    s.classList.toggle('act') 
}
let r =document.querySelector('.btn5')
r.onclick =()=>{
    r.classList.toggle('act') 
}
let l =document.querySelector('.btn6')
l.onclick =()=>{
    l.classList.toggle('act') 
}
let x =document.querySelector('.btn')
x.onclick =()=>{
    x.classList.toggle('act') 
}
let xll =document.querySelector('.btn2')
xll.onclick =()=>{
    xll.classList.toggle('act') 
}








































