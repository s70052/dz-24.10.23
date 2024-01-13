let open_btns = document.querySelectorAll('button[data-modal]')
let modal = document.querySelector('.modal')
let close_btn = document.querySelectorAll('[data-close]')
let current = document.querySelector('#current')
let total = document.querySelector('#total')
open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btn.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})

// slider

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')

let slideIndex = 0
let r = 0
slideShow(slideIndex)

current.innerHTML = '1'
total.innerHTML = '4'

function slideShow(n, d) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    if (d >= 0) {
        current.innerHTML = slideIndex
    }
if(total.innerHTML.length-1){
    total.innerHTML++
}
  

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
}

next_btn.onclick = () => {
    slideIndex++
    slideShow(slideIndex, current.innerHTML)
    current.innerHTML++
}

prev_btn.onclick = () => {
    slideIndex--

    slideShow(slideIndex)
    if(current.innerHTML>1&&current.innerHTML<5){
        current.innerHTML--
    } 
    if(slideIndex===1){
      return
    }
}

let tabheader__item1 = document.querySelector('.tabheader__item1')
let tabheader__item2 = document.querySelector('.tabheader__item2')
let tabheader__item3 = document.querySelector('.tabheader__item3')
let tabheader__item4 = document.querySelector('.tabheader__item4')
let tabcontent1 = document.querySelector('.tabcontent1')
let tabcontent2 = document.querySelector('.tabcontent2')
let tabcontent3 = document.querySelector('.tabcontent3')
let tabcontent4 = document.querySelector('.tabcontent4')


tabheader__item1.onclick = () => {
    tabcontent1.style.display = 'block'
    tabcontent1.classList.add('fade')

    tabcontent2.style.display = 'none'
    tabcontent3.style.display = 'none'
    tabcontent4.style.display = 'none'
}
tabheader__item2.onclick = () => {
    tabcontent2.style.display = 'block'
    tabcontent2.classList.add('fade')
    tabcontent1.style.display = 'none'
    tabcontent3.style.display = 'none'
    tabcontent4.style.display = 'none'
}
tabheader__item3.onclick = () => {
    tabcontent3.style.display = 'block'
    tabcontent3.classList.add('fade')
    tabcontent2.style.display = 'none'
    tabcontent1.style.display = 'none'
    tabcontent4.style.display = 'none'
}
tabheader__item4.onclick = () => {
    tabcontent4.style.display = 'block'
    tabcontent4.classList.add('fade')
    tabcontent1.style.display = 'none'
    tabcontent3.style.display = 'none'
    tabcontent2.style.display = 'none'
}



