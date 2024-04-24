import { baseURL, getData } from "../index.js"

let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
let modal_btn = document.querySelector('.butt')
let inp_value = document.querySelector('.sss')
export default function Item(data) {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const btn2 = document.createElement('button')

    btn.innerHTML = "remove"
    btn2.innerHTML = "change"
    li.innerHTML = data.title
    li.classList.add('li')
    btn2.classList.add("change-btn")
    btn.classList.add("remove-btn")

    li.append(btn, btn2)


    close.onclick = () => {
        modal.style.display = "none"
    }
    btn.onclick = () => {
        const conf = {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(baseURL + "/todos/" + data.id, conf)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    getData()
                }
            })
    }
    btn2.onclick = () => {
        modal.style.display = "block"
        inp_value.value = ''
    };
    modal_btn.onclick = () => {


        const conf2 = {
            method: "put",
            body: JSON.stringify({ title: inp_value.value }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(baseURL + "/todos/" + data.id, conf2)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    data.title = inp_value.value
                    li.innerHTML = inp_value.value
                    getData()
                }
            })
        modal.style.display = "none"
    }
    console.log(data);

    return li
}