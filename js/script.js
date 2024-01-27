/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

//1
let promo_adv = document.querySelectorAll('.d ')

promo_adv.forEach(item => {
    item.remove()
})
//2
let promo__genre = document.querySelector('.promo__genre')

promo__genre.innerHTML = 'драма'
//3

let promo__bg = document.querySelector('.promo__bg ')
promo__bg.style.background = 'url("./img/bg.jpg") center center/cover no-repeat'

//4

let box = document.querySelector('.promo__interactive-list')
let promo__title = document.querySelector('.promo__title')
let promo__descr = document.querySelector('.promo__descr')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
function reload() {
    box.innerHTML = ''

    for (let item of movies.sort()) {
        //a

        let promo__interactive_item = document.createElement('li')
        let delet = document.createElement('div')
        let audio = document.createElement('audio')
        //b
        promo__interactive_item.classList.add('promo__interactive-item')
        delet.classList.add('delete')
        audio.src = `./img/mp3/${item.mp}` || ""
        //c
        box.append(promo__interactive_item)
        promo__interactive_item.append(item)
        promo__interactive_item.append(delet)
        //5
        let idx = movies.indexOf(item) + 1
        promo__interactive_item.innerHTML = `${idx}. ${item.Title}`

        promo__interactive_item.append(delet)
        box.append(promo__interactive_item)

        delet.onclick = () => {
            movies.splice(idx - 1, 1)
            reload()
        }
        promo__interactive_item.onclick = () => {
            promo__bg.style.background = `url(${item.Poster}) no-repeat  center/cover`
            promo__genre.innerHTML = `${item.fi}`
            promo__title.innerHTML = `${item.Title}`
            promo__descr.innerHTML = `${item.Production}`
            one.innerHTML = `${"IMDb:" + ' '}${item.imdbRating}`
            two.innerHTML = `${" Кинопоиск:" + " "} ${item.Metascore}`
            audio.play()
        }
    }
}
reload()

// export {movies}
