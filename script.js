let btn=document.querySelector('.btn')
let btn2=document.querySelector('.btn2')
let btn3=document.querySelector('.btn3')
let img1=document.querySelector('.img1')
let img2=document.querySelector('.img2')
let img3=document.querySelector('.img3')
let img4=document.querySelector('.img4')


btn3.onclick=()=>{
    img1.style.display='none'
    img2.style.display='block'
    img3.style.display='none'
    btn3.classList.remove('active')
    btn3.classList.add('active')
    btn3.style.border='3px solid blue'
    btn2.style.border='none'
    btn.style.border='none'
}
btn2.onclick=()=>{
    img1.style.display='none'
    img3.style.display='block'
    img2.style.display='none'
    btn2.classList.remove('active')
    btn2.classList.add('active')
    btn2.style.border='3px solid blue'
    btn.style.border='none'
    btn3.style.border='none'
}
btn.onclick=()=>{
    img3.style.display='none'
    img1.style.display='block'
    img2.style.display='none'
   btn.style.border='3px solid blue'
   btn2.style.border='none'
   btn3.style.border='none'
}

let btn_box=document.querySelector('.btn_box')

