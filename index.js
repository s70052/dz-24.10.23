let form = document.forms.sign
let inp = document.querySelector('.inp')
let arrr = []

form.onsubmit = (e) => {
    e.preventDefault()
    if (inp.value.trim() !== '') {
        let todo = {
            task: new FormData(form).get('ss'),
            status: false,
            id: Math.random(),
            time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
        }
        inp.value = ''
        console.log(todo)
        arrr.push(todo)
        console.log(arrr);
        reload(arrr, boxx)
    }
}

let boxx = document.querySelector('.boxx')
reload(arrr, boxx)

function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        if (item.task.trim() !== '') {
            let bix = document.createElement('div')
            let ss = document.createElement('div')
            let ss_p = document.createElement('p')
            let ss_img = document.createElement('img')
            let h4 = document.createElement('p')

            bix.classList.add('bix')
            ss.classList.add('ss')
            ss_p.innerHTML = item.task
            ss_img.src = './xbutton_87873.png'
            h4.innerHTML = item.time
            h4.classList.add('h4')

            boxx.append(bix)
            bix.append(ss, h4)
            ss.append(ss_p, ss_img)

            ss_img.onclick = () => {
                arrr = arrr.filter(cartItem => cartItem !== item)
                reload(arrr, boxx)
            }
        }
    }
}








