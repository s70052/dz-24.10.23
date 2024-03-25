
const form = document.forms.namedItem('login')

const inputs = form.querySelectorAll('input')
const p = document.querySelector('.di_p')
let b = document.querySelector('#name')
let age = document.querySelector('.age')
const oop = document.querySelector('.op')
const up = document.querySelector('.up')
const namee = document.querySelector('.name')
const patterns = {
    name: /^[a-zA-Z]{3,10}$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,

}


inputs.forEach((inp) => {
    inp.onkeyup = () => {
       
        let b='От 3 до 10 букв'
        if (!patterns[inp.name].test(inp.value)) {
            inp.style.border = '2px solid red'
            up.innerHTML = 'Введите от 2 до 10 букв'
          
        } else {
            inp.style.border = '2px solid blue'
            up.innerHTML = ''
          
        }
    }
})

const modal_content = document.querySelector('dialog')
form.onsubmit = (e) => {
    e.preventDefault()
    let error = false
    let fm = new FormData(form)
    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
        if (val === 'not') error = true
    })
    inputs.forEach(inp => {
        if (inp.value.length === 0) {
            error = true
        }
    })
    if (error) {
        alert('dddd')
        return
    }
    b.innerHTML = user.name
    p.innerHTML = `Через 10 лет ты станешь ${user.language} разработчиком`
    modal_content.showModal()

}



const closee = document.querySelector('.close')


closee.onclick = () => {
    modal_content.close()

}

