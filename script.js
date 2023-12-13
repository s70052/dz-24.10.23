let white = document.querySelector('.white')
let silver = document.querySelector('.silver')
let btn_blue = document.querySelector('.blue')
let btn_grey = document.querySelector('.grey')
let value = document.querySelector('h2')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let h = document.querySelector('h4')


btn_blue.onclick = () => {
    white.style.display = 'block'
    silver.style.display = 'none'
    value.innerHTML = '$1,999'
    btn_blue.style.border = '3px solid red'
    btn_grey.style.border = 'none'
    btn_grey.style.background = '#79797931'
    btn_blue.style.background = 'blue'
   
    btn_blue.style.color = 'white'
    h.innerHTML = 'White'
}
btn_grey.onclick = () => {
    white.style.display = 'none'
    silver.style.display = 'block'
    btn_grey.style.border = '3px solid red'
    btn_blue.style.border = 'none'
    h.innerHTML = 'Space grey'
    btn_blue.style.background = '#79797931'
    btn_grey.style.background = 'blue'
    btn_grey.style.color = 'white'
    
}

one.onclick = () => {
    one.style.border = '3px solid blue'
    two.style.border = '1px solid grey'
    three.style.border = '1px solid grey'
    four.style.border = '1px solid grey'
    value.innerHTML = '$1,999'
}

two.onclick = () => {
    two.style.border = '3px solid blue'
    one.style.border = '1px solid grey'
    three.style.border = '1px solid grey'
    value.innerHTML = '$2,199'
    four.style.border = '1px solid grey'
}

three.onclick = () => {
    one.style.border = '1px solid grey'
    two.style.border = '1px solid grey'
    three.style.border = '3px solid blue'
    four.style.border = '1px solid grey'
    value.innerHTML = '$2,599'
}
four.onclick = () => {
    one.style.border = '1px solid grey'
    two.style.border = '1px solid grey'
    three.style.border = '1px solid grey'
    four.style.border = '3px solid blue'
    value.innerHTML = '$3,199'
}