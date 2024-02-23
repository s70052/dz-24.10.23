let form = document.forms.signup
let inputs = document.querySelectorAll('input')
let count = 0

let error = document.querySelector('#error')
let success = document.querySelector('#success')
let succes = 0
let need=document.querySelector('.need')
form.onsubmit = (event) => {
    event.preventDefault()
    count = 0
    succes = 0
    inputs.forEach(inp => {
        let isRequired = inp.parentNode.classList.contains('req')
        if (isRequired && inp.value.length === 0) {
            inp.parentNode.classList.add('error')
            count++
        } else {
            inp.parentNode.classList.remove('error')
        }
        if (inp.value.length>0) {
            succes++
        }
    
        error.innerHTML = 'Error' + " " + ":" + " " + count + '/12'
        success.innerHTML = 'Succes' + " " + ":" + " " + succes + '/12'
   
    })



    
    submit(event.target)
}

function submit(form) {
    let fm = new FormData(form)
    let user = {}
    fm.forEach((val, key) => user[key] = val)
    console.log(user)
}
