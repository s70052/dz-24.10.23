import Item from "./components/Item.js"

export const baseURL = "http://localhost:8080"


const form = document.forms.namedItem('create')
const ul = document.querySelector('ol')

export function getData() {
    fetch(baseURL + "/todos")
        .then(res => res.json())
        .then(res => reload(res, ul))
}
getData()

form.onsubmit = (e) => {
    e.preventDefault()

    const todo = {
        id: String(Math.random()),
        title: new FormData(e.target).get('title'),
        time: new Date().toLocaleDateString(),
        isDone: false
    }

    if (todo.title.length === 0) return

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
    form.reset()
}



function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let li = Item(item)
        place.append(li)
    }
}


