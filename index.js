let inp = document.querySelectorAll('.inp')
let btn = document.querySelector('button')
let p = document.querySelectorAll('.p')
let niz = document.querySelectorAll('.niz')
let svg = document.querySelectorAll('.svg')
let value = 0

let error = document.querySelector('.error')
let success = document.querySelector('.success')
let form = document.forms.login
let error_count = 0
btn.onclick = (event) => {
    event.preventDefault()

    inp.forEach((input, idx) => {

        if (input.value === "") {
            input.style.border = '3px solid red'
            btn.style.background = 'red'
            value++
            error.innerHTML = "Error: " + value + '/12'
        } else {
            input.style.border = '3px solid #4200FF'
            value++
            success.innerHTML = 'Success:' + value + '/12'
        }
        if (inp[idx].value === "") {
            p[idx].style.color = 'red'
            niz[idx].innerHTML = 'Please enter your email adress'
            niz[idx].style.color = 'red'
            svg[idx].style.display = 'block'
        } else {
            p[idx].style.color = '#4200FF'
            niz[idx].innerHTML = 'Need to fill'
            niz[idx].style.color = 'gray'
            svg[idx].style.display = 'none'
        }
    }
    )
    if (!error_count > 0) {
       alert('Error')
    } else {
        submit()
    }

}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })


    console.log(user);
}




