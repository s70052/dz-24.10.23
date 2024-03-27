const form = document.forms.namedItem('login');
const inputs = form.querySelectorAll('input');
let errors = document.querySelector('.errors');
let errorCount = 0
let success = document.querySelector('.success')
let success_count = 0
let b = document.querySelector('#name')
let p = document.querySelector('.di_p')
let stat = false
let v=document.querySelector('.All')
const patterns = {
    name: /^[a-zA-Z]{3,10}$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
}
success_count = inputs.length
inputs.forEach((inp) => {
    inp.oninput = () => {
        let label = inp.parentNode;
        let span = document.querySelector('span');

        if (!patterns[inp.name].test(inp.value)) {
            if (!span.classList.contains('error1')) {

                errorCount++
                success_count--
            }
            inp.style.border='2px solid red'
            label.classList.add('error1')
            span.classList.add('error1')
            span.style.display = 'flex'
            stat = true
        } else {
            if (span.classList.contains('error1')) {
                errorCount--
                success_count++
            }
            label.classList.remove('error1')
            span.classList.remove('error1')
            inp.style.border='2px solid blue'
            span.style.display = 'none'
            stat = false
        }
        errors.innerHTML = errorCount
        success.innerHTML = success_count
       
    }
    v.innerHTML=inputs.length
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
        alert('Заполните все поля')
        return
    }

    if (stat !== true) {

        b.innerHTML = user.name
        p.innerHTML = `Через 10 лет ты станешь ${user.language} разработчиком`
        modal_content.showModal()

    }else{
        alert('Заполните все правильно')
    }

}



const closee = document.querySelector('.close')


closee.onclick = () => {
    modal_content.close()

}

