let body=document.body
//a
let wrap=document.createElement('div')
let gl_box=document.createElement('div')
let span_cl=document.createElement('div')
let span_btn=document.createElement('button')
let svg=document.createElement('img')
let cl2=document.createElement('div')
let img1=document.createElement('img')
let svg2=document.createElement('img')
let sd=document.createElement('div')
let h5=document.createElement('h5')
let p=document.createElement('p')
let button=document.createElement('button')
let cl3=document.createElement('div')
let button3=document.createElement('button')
let svg3=document.createElement('svg')
let kks =document.createElement('button')

//b
wrap.classList.add('wrap')
gl_box.classList.add('gl_box')
span_cl.classList.add('span_cl')
span_btn.classList.add('span_btn')
cl2.classList.add('cl2')
sd.classList.add('sd')
cl3.classList.add('cl3')
button3.classList.add('svf_bt')
kks.classList.add('kks')
svg.classList.add('kl')

span_btn.innerHTML="0 | 0 | 6"
img1.src='https://olcha.uz/image/220x220/products/supplier/stores/1/2023-11-27/N7Ty85z4Hti1mRvCdDHP9x2XFOedatIxL8RRrTWWGd3Af3YFkzzrsDtaYMvr.jpg'
svg.src='./img/Аннотация 2024-01-11 151323.png'
svg2.src='./img/Аннотация 2024-01-11 150637.png'
h5.innerHTML='Honor X7b 8/128 GB'
p.innerHTML='2 220 000 сум'
button.innerHTML='425 000 сум x 6 мес'
kks.innerHTML='В Рассрочку'

//c
body.append(wrap)
wrap.append(gl_box)
gl_box.append(span_cl,cl2,sd,cl3)
span_cl.append(span_btn,svg2)
cl2.append(img1,svg)
sd.append(h5,p,button)
cl3.append(button3,kks)

let i =document.querySelector('.i')
let i_i =document.querySelector('.i_i')
let ssc =document.querySelector('.ssc')
let sscc =document.querySelector('.sscc')
ssc.onclick =()=>{
    i_i.style.display='none'
    i.style.display='block'
}

sscc.onclick =()=>{
    i_i.style.display='block'
    i.style.display='none'
}