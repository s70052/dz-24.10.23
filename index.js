let inp = document.querySelectorAll('.inp')
let btn = document.querySelector('button')
let p = document.querySelectorAll('.p')
let niz = document.querySelectorAll('.niz')
let svg = document.querySelectorAll('.svg')


let error = document.querySelector('.error')
let success = document.querySelector('.success')
let form = document.forms.login

btn.onclick = (event) => {
    event.preventDefault()
    let value = 0
    let val = 0
    inp.forEach((input, idx) => {

        if (input.value === "") {
            input.style.border = '3px solid red'
            btn.style.background = 'red'
            value++
            error.innerHTML = "Error: " + value + '/12'
        } else {
            input.style.border = '3px solid #4200FF'
            val++
            success.innerHTML = 'Success:' + val + '/12'
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
    if (!value > 0) {
        submit()
    } else {
        alert('Error')
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




