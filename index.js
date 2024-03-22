



const form = document.forms.login;
const nam = document.querySelector('.name')
const age = document.querySelector('.age')




form.onsubmit = (e) => {
    e.preventDefault()

    let fm = new FormData(form)
    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
    })
    if (nam.value && age.value !== '') {
        modal.style.display = 'block'
        console.log(user);
    } else {
        alert('Заполни все поля')
    }
}

const modal = document.querySelector('#myModal')
const modal_content = document.querySelector('.modal-content')
const select = document.querySelector('select')
const p = document.querySelector('p')
const closee = document.querySelector('.close')

select.onclick = (event) => {
    const option = event.target.value

    modal_content.classList.add('f')
    p.innerHTML = 'Через 10 лет вы станете' + ' ' + option + ' ' + 'разработчиком'
}
// const options = document.querySelectorAll('option');

// options.forEach(option => {
//     option.onclick = (event) => {
//         let selectedValue = event.target.value;
       
//         modal_content.classList.add('f')
//         p.innerHTML = 'Через 10 лет вы станете' + ' ' + selectedValue + ' ' + 'разработчиком'
//     }
// })

closee.onclick = () => {
    modal.style.display = 'none'
}

