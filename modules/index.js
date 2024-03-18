import { goods } from "./db.js"

const container = document.querySelector('.container')
const cart_cont = document.querySelector('.items-cont')
const action_btns = document.querySelectorAll('[data-action]')
const btn_menu = document.querySelector('#menu')
const menu = document.querySelector('.menu')
let cart_items = []

btn_menu.onclick = () => {
    menu.classList.toggle('open')
}

action_btns.forEach((btn) => {
    btn.onclick = () => {
        let arr = btn.getAttribute('data-action') === "five" ? goods.slice(0, 5) : goods

        reload(arr, container)
    }
})

let a = 0
let h1 = document.querySelector('.h1')
reload(goods, container)

function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let main_div = document.createElement('div')
        let picture = document.createElement('img')
        let describe = document.createElement('div')
        let title = document.createElement('span')
        let p = document.createElement('p')
        let row = document.createElement('div')
        let rate = getRateBlock('./public/icons/dollar.svg', item.price)
        let rate2 = getRateBlock('./public/icons/star.svg', item.rating.rate)
        let rate3 = getRateBlock('./public/icons/box.svg', item.rating.count)
        let save_button = document.createElement('button')

        save_button.classList.add('ww')
        main_div.classList.add('item')
        picture.classList.add('item-img')
        describe.classList.add('describe-block')
        row.classList.add('row')
        picture.src = item.image
        picture.alt = "bag"

        title.innerHTML = item.category
        p.innerHTML = item.description.slice(0, 100) + " <b>read moe</b>"
        save_button.innerHTML = "В избранное"

        main_div.append(picture, describe)
        describe.append(title, p, row, save_button)
        row.append(rate, rate2, rate3)
        place.append(main_div)


       


        save_button.onclick = () => {
            if (save_button.classList.contains('zzz')) {
                save_button.classList.remove('zzz')
                save_button.innerHTML = 'В избранное'
                save_button.style.color = 'black'
                a--
                cart_items = cart_items.filter(cartItem => cartItem !== item)
                console.log(cart_items)
                reload_cart(cart_items, cart_cont)

            } else {
                save_button.innerHTML = 'Добавлено'
                save_button.classList.add('zzz')
                save_button.style.color = 'white'
                a++
                cart_items.push(item)
                console.log(cart_items)

                reload_cart(cart_items, cart_cont)

            }
            h1.innerHTML = 'В Корзине товаров ' + a
        }
    }

}


function getRateBlock(path, text) {
    let rate = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')

    rate.classList.add('rate')
    img.src = path
    span.innerHTML = text


    rate.append(img, span)
    return rate
}
reload_cart(cart_items, cart_cont)
function reload_cart(arr, place) {


    place.innerHTML = ""

    for (let item of arr) {
        const cart_item = document.createElement('div')
        const left = document.createElement('div')
        const right = document.createElement('div')
        const img = document.createElement('img')
        const col = document.createElement('div')
        const title = document.createElement('span')
        const price = document.createElement('span')
        const counter = document.createElement('div')
        const btn_plus = document.createElement('p')
        const btn_minus = document.createElement('p')
        const inp = document.createElement('p')
        const remove = document.createElement('button')

        cart_item.classList.add('cart-item')
        left.classList.add('left')
        right.classList.add('right')
        counter.classList.add('counter')
        remove.classList.add('rem')
        col.classList.add('col')
        title.classList.add('title')
        price.classList.add('price')
        inp.classList.add('inp')
        img.src = item.image
        img.alt = item.title
        inp.type = 'number'
        inp.innerHTML = '0'

        title.innerHTML = item.category
        price.innerHTML = item.price
        btn_plus.innerHTML = "+"
        btn_minus.innerHTML = "-"
        remove.innerHTML = "remove"

        cart_item.append(left, right)
        left.append(img, col)
        col.append(title, price)
        right.append(counter, remove)
        counter.append(btn_plus, inp, btn_minus)
        place.append(cart_item)


        remove.onclick = () => {
           
            cart_items = cart_items.filter(cartItem => cartItem !== item)
            let save_btton = document.querySelectorAll('.ww')
            a--
            reload_cart(cart_items, cart_cont)
           
            save_btton.forEach(elem => {
                
                elem.classList.remove('zzz')
                elem.style.color = 'black'
                elem.innerHTML = 'В избранное'
            })
            h1.innerHTML = 'В Корзине товаров ' + a
            
            
        }


    }
}


