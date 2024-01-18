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
        r = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    if (d >= 0) {
        current.innerHTML = slideIndex
    }
    if (total.innerHTML.length - 1) {
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
    if (current.innerHTML > 1 && current.innerHTML < 5) {
        current.innerHTML--
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


const user_data = {
    gender: "woman"
}

const gender_btns = document.querySelectorAll('[data-gender]')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const actions = document.querySelectorAll('.calculating__choose_big div')
const result_view = document.querySelector('#result')

gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        const g = btn.dataset.gender
        user_data["gender"] = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
    }
})

let prev = 1
actions.forEach((div, idx) => {
    div.onclick = () => {
        actions[prev].classList.remove('calculating__choose-item_active')
        div.classList.add('calculating__choose-item_active')
        prev = idx
        const cft = div.dataset.cft

        if (user_data.gender === 'woman') {
            const result = (655.1 + (9.563 * user_data['weight']) + (1.85 * user_data['height']) - (4.676 * user_data['age'])) * cft
            result_view.innerHTML = Math.round(result)
        } else {
            const result = (66.5 + (13.75 * user_data['weight']) + (5.003 * user_data['height']) - (6.775 * user_data['age']))
            result_view.innerHTML = Math.round(result)
        }
    }


})







let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let conf = document.querySelector('.confetti-container')
minutes.innerHTML = '56'
seconds.innerHTML = '20'



var confetti = document.querySelectorAll('.box > div');
function createConfetti() {
    var box = document.getElementById('box');
    var colors = ['red', 'green'];

    for (var i = 0; i < 1000; i++) {
        var div = document.createElement('div');
        box.appendChild(div);
    }

    var confetti = document.querySelectorAll('.box > div');

    for (var i = 0; i < confetti.length; i++) {
        var size = Math.random() * 0.01 * i;

        confetti[i].style.width = 5 + size + 'px';
        confetti[i].style.height = 16 + size + 'px';
        confetti[i].style.left = Math.random() * innerWidth + 'px';

        var background = colors[Math.floor(Math.random() * colors.length)];
        confetti[i].style.backgroundColor = background;

        box.children[i].style.transform = 'rotate(' + size * i + 'deg)';
    }
}

setInterval(() => {
    if (seconds.innerHTML > 0) {
        seconds.innerHTML--
    } else if (minutes.innerHTML > 0) {
        minutes.innerHTML--
        seconds.innerHTML = 59
    } else if (seconds.innerHTML === 0) {
        createConfetti()
    }
}, 1000)















