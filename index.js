

let b = document.querySelector('.plus')
let c = document.querySelector('.obnulit')
let d = document.querySelector('.q')
let m = document.querySelector('.random')

b.onclick = () => {
    if (value >= 0 && value < 10) {
        value++
        a.innerHTML = value
    }
}
d.onclick = () => {
    if (value > 0) {
        value--
        a.innerHTML= value
    }
}

c.onclick = () => {
    value = 0
    a.innerHTML = value
}

m.onclick = () => {
    let randomId = Math.round(Math.random() * 10)
    a.innerHTML= randomId
}











