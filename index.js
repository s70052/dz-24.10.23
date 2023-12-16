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
let m = document.querySelector('#blue-button')
let k = document.querySelector('.wvrldc')
let h = document.querySelector('.eakmvkdc')
let u = document.querySelector('.sss')

d.onclick = () => {
    a.style.display = 'block'
    b.style.display = 'none'
    k.style.display = 'none'
    d.style.border = '3px solid blue'
    c.style.border = 'none'
    m.style.border = 'none'
}

c.onclick = () => {
    b.style.display = 'block'
    a.style.display = 'none'
    k.style.display = 'none'
    c.style.border = '3px solid blue'
    m.style.border = 'none'
    d.style.border = 'none'
}
m.onclick = () => {
    a.style.display = 'none'
    b.style.display = 'none'
    k.style.display = 'block'
    m.style.border = '3px solid blue'
    c.style.border = 'none'
    d.style.border = 'none'
}
h.onmouseenter = () => {
    h.classList.toggle('active')
}


let s = document.querySelector('.btn4')
s.onclick = () => {
    s.classList.toggle('act')
}
let r = document.querySelector('.btn5')
r.onclick = () => {
    r.classList.toggle('act')
}
let l = document.querySelector('.btn6')
l.onclick = () => {
    l.classList.toggle('act')
}
let x = document.querySelector('.btn')
x.onclick = () => {
    x.classList.toggle('act')
}
let xll = document.querySelector('.btn2')
xll.onclick = () => {
    xll.classList.toggle('act')
}
u.onmouseenter = () => {
    u.style.color = 'blue'
}


let openBtn = document.querySelector('.sam')
let closeBtn = document.querySelector('.close')
let modal_w = document.querySelector('.bg-modal')

openBtn.onclick = () => {
    modal_w.style.display = "flex";

}
closeBtn.onclick=()=>{
    modal_w.style.display='none'

}
closeBtn.onmouseenter=()=>{
    closeBtn.classList.toggle('ackd')
}
modal_w.onclick = (event) => {
    if (event.target === modal_w) {
        modal_w.style.display = 'none';
    }
}
let boxxx=document.querySelector('.boxxx')
boxxx.onclick=()=>{
    boxxx.style.border='2px solid blue'
}

let nn = document.querySelector('.dddd')
let nnn = document.querySelector('.dddd2')
let ll = document.querySelector('.hhhhhhh')
let lll = document.querySelector('.hhhhhh')
let llll = document.querySelector('.hhhhh')
let lllll = document.querySelector('.hhhh')

let arrow = document.querySelector('.dddd3')
let arrow2 = document.querySelector('.kkso')
let border = document.querySelector('.divvv')
let border2 = document.querySelector('.divvvv')
let border3 = document.querySelector('.divvvvm')
let j = document.querySelector('.jjj')
let jj = document.querySelector('.jjjj')
let jjj = document.querySelector('.jjjjj')
let jjjj = document.querySelector('.jjjjjj')
let jjjjj = document.querySelector('.jjjjjjj')
let jjjjjj = document.querySelector('.Tex')
let kk = document.querySelector('.kk')
let kkk = document.querySelector('.kkk')
let kkkk = document.querySelector('.kkkk')
let kkkkk = document.querySelector('.kkkkk')
let two_k=document.querySelector('.two_k')
let three_k=document.querySelector('.three_k')
let four_k=document.querySelector('.four_k')
let five_k=document.querySelector('.five_k')


nn.onclick = () => {
    jjjjjj.style.display = 'block';
    jjjjj.style.display = 'block';
    jjjj.style.display = 'block';
    jjj.style.display = 'block';
    jj.style.display = 'block';
    j.style.display = 'block';

    kk.style.display = 'block';
    kkk.style.display = 'block';
    kkkk.style.display = 'block';
    kkkkk.style.display = 'block';
    lllll.style.display = 'block';
    llll.style.display = 'block';
    lll.style.display = 'block';
    ll.style.display = 'block';
    arrow.style.display = 'block'

    nn.style.display = 'none'
    border.style.display = 'block'
    border2.style.display = 'block'
    border3.style.display = 'block'
    nnn.style.display = 'none'

}
arrow.onclick = () => {
    arrow.style.display = 'none'
    nnn.style.display = 'block'
    nn.style.display = 'block'
    kk.style.display = 'none';
    kkk.style.display = 'none';
    kkkk.style.display = 'none';
    kkkkk.style.display = 'none';
    j.style.display = 'none';
    jj.style.display = 'none';
    jjj.style.display = 'none';
    jjjj.style.display = 'none';
    jjjjj.style.display = 'none';
    jjjjjj.style.display = 'none';
    ll.style.display = 'none';
    llll.style.display = 'none';
    lllll.style.display = 'none';
    lll.style.display = 'none';
    border.style.display = 'none'
    border2.style.display = 'none'
    border3.style.display = 'none'

}
let pp = document.querySelector('.pp')
let ppp = document.querySelector('.ppp')
let ifk = document.querySelector('.if')
let ifk2 = document.querySelector('.if2')
let border4=document.querySelector('.divv4')
let border5=document.querySelector('.divv5')
let border6=document.querySelector('.divv6')
let y=document.querySelector('.five')
let yy=document.querySelector('.six')
let yyy=document.querySelector('.seven')
let yyyy=document.querySelector('.tex')
let yyyyy=document.querySelector('.jcjd')
arrow2.onclick = () => {
    arrow2.style.display = 'none'
    nnn.style.display = 'block'
    arrow.style.display = 'none'
    border4.style.display = 'none'
    border5.style.display = 'none'
    border6.style.display = 'none'
    nn.style.display = 'block'

    pp.style.display = 'none';
    ppp.style.display = 'none';
    ifk.style.display = 'none';
    ifk2.style.display = 'none';
    y.style.display='none'
    yy.style.display='none'
    yyy.style.display='none'
    yyyy.style.display='none'
    yyyyy.style.display='none'
    two_k.style.display = 'none';
    three_k.style.display = 'none';
    four_k.style.display = 'none';
    five_k.style.display = 'none';
}

nnn.onclick = () => {
    two_k.style.display = 'block';
    three_k.style.display = 'block';
    four_k.style.display = 'block';
    five_k.style.display = 'block';
    y.style.display='block'
    yy.style.display='block'
    yyy.style.display='block'
    yyyy.style.display='block'
    yyyyy.style.display='block'
    border4.style.display = 'block'
    border5.style.display = 'block'
    border6.style.display = 'block'
    ifk.style.display = 'block';
    ifk2.style.display = 'block';
    ppp.style.display = 'block';
    pp.style.display = 'block';
    arrow2.style.display = 'block'


    nnn.style.display = 'none'
    nn.style.display = 'none'

    arrow.style.display = 'none'

}










































