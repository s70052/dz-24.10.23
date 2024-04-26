let form = document.forms.sign
let inp = document.querySelector('.inp')
let arrr = []

const baseURL = "http://localhost:8080"
function getData() {
    fetch(baseURL + "/todos")
        .then(res => res.json())
        .then(res => reload(res,boxx))
}
getData()
form.onsubmit = (e) => {
    e.preventDefault()

    let todo = {
        task: new FormData(form).get('ss'),
        status: false,
        id: String(Math.random()),
        time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    }
    // inp.value = ''
    // console.log(todo)
    // arrr.push(todo)
    // console.log(arrr);
    // reload(arrr, boxx)
    const conf = {
        method: "post",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(baseURL + "/todos", conf)
        .then(res => {
            if (res.status === 201 || res.status === 200) getData()
        })

}


let boxx = document.querySelector('.boxx')


function reload(data, place) {
place.innerHTML=''
    for (let item of data) {
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
                // arrr = arrr.filter(cartItem => cartItem !== item)
                // reload(arrr, boxx)
                const conf2 = {
                    method: "delete",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                fetch(baseURL + "/todos/" + item.id, conf2)
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            getData()
                        }
                    })
            }
            bix.ondblclick = () => {
                let text = prompt('Введите новый текст задачи')
                if (text !== null && text.trim() !== '') {
                    fetch(baseURL + "/todos/" + item.id, {
                        method: "put",
                        body: JSON.stringify({ ...item, task: text }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            getData()
                        }
                    })
                }
            }

        }
    }
}





let a=document.querySelector(".c")
a.onclick=()=>{
    a.src='./images (6).jfif'
}
let b=document.querySelector('.cc')
b.onclick=()=>{
    b.src='./realistic-illustration-of-gold-crown-with-red-gems-jewelry-award-royalty_1262-13473.avif'
    b.style.width='30%'
    b.style.filter='none'
}

