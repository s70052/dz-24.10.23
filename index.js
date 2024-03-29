
let form = document.forms.namedItem('login')
let tb = document.querySelector('.tb')
let inp=document.querySelectorAll('input')
let el = []
form.onsubmit = (e) => {
    e.preventDefault()
    let age = new FormData(form).get('age')
    let a = 2024 - age
    let user = {
        name: new FormData(form).get('name'),
        year: a,
        id:Math.random()
    }
    el.push(user)
    console.log(user)
    inp.forEach(item=>{
        item.value=''
    })
    reload(el, tb)
}

function reload(arr, place) {
    place.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        let table = document.createElement('table')
        let tr = document.createElement('tr')
        let th = document.createElement('th')
        let th2 = document.createElement('th')
        let th3 = document.createElement('th')
        let th4 = document.createElement('th')
        let imgs = document.createElement('div')
        let change = document.createElement('img')
        let trash = document.createElement('img')

        table.classList.add('table')
        tr.classList.add('tr')
        th.classList.add('th', 'e')
        th.innerHTML = i+1
        th2.classList.add('thh')
        th2.innerHTML = item.name
        th3.classList.add('thhh')
        th3.innerHTML = item.year
        th4.classList.add('th')
        imgs.classList.add('imgs')
        change.classList.add('change')
        change.src = './8666681_edit_icon.svg'
        trash.src = './4781812_bin_delete_file_garbage_recycle_icon.png'
        trash.classList.add('trash')

        place.appendChild(table)
        table.appendChild(tr)
        tr.append(th, th2, th3, th4)
        th4.append(imgs)
        imgs.append(change, trash)

  

        trash.onclick = () => {
            table.classList.add('aa')

            setTimeout(() => {
                table.remove()
            }, 500)
        }
    }
}

reload(el, tb)