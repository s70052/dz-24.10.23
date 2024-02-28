



/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Гарри Поттер",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo__adv_title = document.querySelectorAll('.im')
promo__adv_title.forEach(element => {
    element.remove()
})

let promo__genre = document.querySelector('.promo__genre')
promo__genre.innerHTML = 'Драмма'

let promo__bg = document.querySelector('.promo__bg')
promo__bg.style.background = 'url(./img/bg.jpg) center / cover no-repeat'


let promo__interactive = document.querySelectorAll('.promo__interactive-item')
let dialog = document.querySelector('dialog')
promo__interactive.forEach((item, idx) => {
    item.innerHTML = movieDB.movies[idx]

    item.onclick = () => {

        dialog.showModal()

        dialog.classList.add('dia')

    }
})


let circ=document.querySelector('.circ')
let circle=document.querySelector('.circle')
circ.onclick=()=>{
    dialog.close()
}
circle.onclick=()=>{
    dialog.close()
}

