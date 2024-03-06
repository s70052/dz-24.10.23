

import { movies } from "./mb.js"

let advs = document.querySelectorAll('.promo__adv img')

advs.forEach(adv => {
    adv.remove()
})





let bg = document.querySelector('.promo__bg')
const ul = document.querySelector('.promo__interactive-list')
let iframe = document.querySelector('.iframe')
let d = document.querySelector('.d')
let promo__genre = document.querySelector('.promo__genre')
let promo__title = document.querySelector('.promo__title')
let promo__descr = document.querySelector('.promo__descr')
let circ = document.querySelector('.circ')
let dia = document.querySelector('dialog')
for (let item of movies) {

    let li = document.createElement('li')
    let del = document.createElement('div')

    li.classList.add('promo__interactive-item')
    del.classList.add('delete')


    li.innerHTML = item.Title

    li.append(del)
    ul.append(li)

    del.onclick = () => {
        li.remove()

    }
    li.onclick = () => {
        iframe.src = item.url
        iframe.style.display = "block"
        d.style.display = 'none'
        bg.style.background = 'none'
        bg.style.padding = "0"
        // dia.showModal()
    }
    li.ondblclick = () => {
        bg.style.padding = "100px 30px 20px 50px"
        promo__genre.innerHTML = item.Genre
        promo__title.innerHTML = item.Title
        promo__descr.innerHTML = item.Plot
        d.style.display = 'block'
        iframe.style.display = "none"
        bg.classList.add('pl')
        bg.style.background = `url(${item.Poster}) center center/cover no-repeat`
    }
    circ.onclick = () => {
        dia.close()
    }
}