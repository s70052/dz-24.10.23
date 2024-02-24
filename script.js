let form = document.forms.signup
let inputs = document.querySelectorAll('input')
let count = 0

let error = document.querySelector('#error')
let success = document.querySelector('#success')
let succes = 0
let need = document.querySelector('.need')
form.onsubmit = (event) => {
    event.preventDefault()
    let err = false
    count = 0
    succes = 0
    inputs.forEach(inp => {
        let isRequired = inp.parentNode.classList.contains('req')
        if (isRequired === true && inp.value.length === 0) {
            err = true
            inp.parentNode.classList.add('error')
            count++
        } else {
            inp.parentNode.classList.remove('error')
        }
        if (inp.value.length > 0) {
            succes++
        }
        error.innerHTML = 'Error' + " " + ":" + " " + count + '/12'
        success.innerHTML = 'Succes' + " " + ":" + " " + succes + '/12'
    })

    if (err === true) {
        dialog.showModal();
        dialog.classList.add('s')
        setTimeout(() => {
            dialog.close()
        }, 2000)
        return
    }
    submit(event.target)
}
let dialog = document.querySelector('dialog')
function submit(form) {
    let fm = new FormData(form)
    let user = {}
    fm.forEach((val, key) => user[key] = val)
    console.log(user)
}
let nam = document.querySelectorAll('.name')
let patterns = {
    ntm: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    number: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
}
nam.forEach(item => {
    item.onkeyup = () => {
        if (patterns.ntm.test(item.value)) {
            item.classList.remove('error')
            item.style.border = '3px solid blue'
        } else {
            item.style.border = '3px solid red'
            item.classList.add('error')
        }
    }
})


let emails = document.querySelector('.email')
emails.onkeyup = () => {
    if (patterns.email.test(emails.value)) {
        emails.classList.remove('error')
        emails.style.border = '3px solid blue'
    } else {
        emails.classList.add('error')
        emails.style.border = '3px solid red'
    }
}

let num_tel = document.querySelector('.number')
num_tel.onkeyup = () => {
    if (patterns.number.test(num_tel.value)) {
        num_tel.classList.remove('error')
        num_tel.style.border = '3px solid blue'
    } else {
        num_tel.classList.add('error')
        num_tel.style.border = '3px solid red'
    }
}


