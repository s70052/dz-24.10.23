let form = document.forms.namedItem('login')
let tb = document.querySelector('.tb')
let inp = document.querySelectorAll('input')
let el = []
let cont = document.querySelector('.cont')
let cont2 = document.querySelector('.cont2')
let cont3 = document.querySelector('.cont3')
form.onsubmit = (e) => {
    e.preventDefault()


    let user = {
        name: new FormData(form).get('name'),
        year: new FormData(form).get('age'),
        id: Math.random(),

    }
    el.push(user)
    console.log(user)
    form.reset()

    reload(el)
}
reload(el)
function reload(arr) {
    cont.innerHTML = ''
    cont2.innerHTML = ''
    cont3.innerHTML = ''
    for (let item of arr) {
        let dannie = document.createElement('div')
        let h3 = document.createElement('h3')
        let inp_box = document.createElement('div')
        let p = document.createElement('p')
        let span = document.createElement('span')

        dannie.classList.add('dannie')
        h3.innerHTML = item.name
        inp_box.classList.add('inp_box')
        p.innerHTML = 'age'
        span.innerHTML = item.year


        dannie.append(h3, inp_box)
        inp_box.append(p, span)
        if (item.year && item.name !== '') {


            if (item.year > 0 && item.year <= 25) {
                cont.append(dannie)
            }
            if (item.year > 25 && item.year <= 50) {
                cont2.append(dannie)
            }
            if (item.year > 50) {
                cont3.append(dannie)
            }
        }
    }
}

