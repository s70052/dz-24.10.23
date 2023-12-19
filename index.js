let str = document.querySelector('.str')
let speed = 60
let max_speed = 80
let info_value = document.querySelector('.info_value')
let cena = document.querySelector('.cena')
let val = 750
str.onclick = () => {
    if (speed < max_speed) {
        speed += 5
        val -= 10
        info_value.innerHTML = speed + ' ' + 'км/ч'
        cena.innerHTML = val + 'км'
    }

}
let speed2 = 20
let str2 = document.querySelector('.str2')
str2.onclick = () => {
    if (speed > speed2) {
        speed -= 5
        val += 10
        info_value.innerHTML = speed + ' ' + 'км/ч'
        cena.innerHTML = val + 'км'
    }
}
let str3 = document.querySelector('.str3')
let value = 0
let info_value3 = document.querySelector('.info_value3')
let pp = document.querySelector('.pp')
str3.onclick = () => {
    if (value >= 0 && value < 20) {
        value++
        info_value3.innerHTML = value + '°'
    }
    if (value > 15) {
        pp.innerHTML = 'кондиционер'
    } else {
        pp.innerHTML = 'печка'
    }


}
let str4 = document.querySelector('.str4')
str4.onclick = () => {
    if (value > 0) {
        value--
        info_value3.innerHTML = value + '°'
    }
    if (value <= 15) {
        pp.innerHTML = 'печка'

    } else {
        pp.innerHTML = 'кондиционер'
    }
}
let info_value4 = document.querySelector('.info_value4')
let str5 = document.querySelector('.str5')
let str6 = document.querySelector('.str6')
let swi = document.querySelector('.swi')
let ballon = document.querySelector('.ballon')
let ballon2 = document.querySelector('.ballon2')
let ballon4 = document.querySelector('.ballon4')
let ballon3 = document.querySelector('.ballon3')

let d = 19
let g = 21
let f = 19
str5.onclick = () => {

    if (g > d) {
        g = 21
        info_value4.innerHTML = g
    } else {
        d = 19
        info_value4.innerHTML = d
    }
    if (d === 19) {
        ballon3.style.display = 'block'
        ballon4.style.display = 'block'
        ballon.style.display = 'none'
        ballon2.style.display = 'none'
    }

}

str6.onclick = () => {
    if (f < g) {
        d = 19
        info_value4.innerHTML = d

    } else {
        g = 21
        info_value4.innerHTML = g
    }
    if (g === 21) {
        ballon3.style.display = 'none'
        ballon4.style.display = 'none'
        ballon.style.display = 'block'
        ballon2.style.display = 'block'
    }

}
let num = 750;

swi.onclick = () => {
    if (num >740) {
       num-=10
      cena.innerHTML=num +'км'
    }  
}