
let arr = [
    {
        id: 1,
        name: 'Это любовь',
        url: './mp3/18. Это любовь.mp3',
        artist: 'Scriptonit',
        duration: '4:39',
        time: "6 дней назад",
        img: "./imgs/1200x630bb.jpg"
    },
    {
        id: 2,
        name: 'По сути',
        url: './mp3/JANAGA — По сути (Official Mood Video).mp3',
        artist: 'JANAGA',
        duration: '2:23',
        time: "8 дней назад",
        img: "./imgs/a926464d3397484e9d61c679779eb15812_resize_2000x2000_same_b7ccdd.jfif"
    },
    {
        id: 3,
        name: 'Surround Sound',
        url: './mp3/J.I.D - Surround Sound (feat. COCONA from XG) Remix.mp3',
        artist: 'J.I.D',
        duration: '2:48',
        time: "7 дней назад",
        img: "./imgs/images (5).jfif"
    },
    {
        id: 4,
        name: 'IVL',
        url: './mp3/MACAN & SCIRENA - IVL.mp3',
        artist: 'MACAN & SCIRENA',
        duration: '3:20',
        time: "9 день назад",
        img: "./imgs/iyiIdIHMmV8.jpg.jpg"
    },
    {
        id: 5,
        name: 'Bounty',
        url: './mp3/Miyagi & Эндшпиль - Bounty.mp3',
        artist: 'Miyagi & Эндшпиль',
        duration: '3:20',
        time: "6 дней назад",
        img: "./imgs/Без названия (17).jfif"
    },
    {
        id: 6,
        name: 'Круговорот',
        url: './mp3/Miyagi_&_Эндшпиль_Круговорот_Official_Audio.mp3',
        artist: 'Miyagi_&_Эндшпиль',
        duration: '3:49',
        time: "7 дней назад",
        img: './imgs/Без названия (18).jfif'
    },
    {
        id: 7,
        name: 'KADI',
        url: './mp3/Miyagi_Эндшпиль_feat_KADI_In_Love.mp3',
        artist: 'Miyagi',
        duration: '4:39',
        time: "9 дней назад",
        img: 'https://i.scdn.co/image/ab67616d0000b273b3d102b4542087375ea0339d'
    },
    {
        id: 6,
        name: 'Круговорот',
        url: './mp3/Miyagi_&_Эндшпиль_Круговорот_Official_Audio.mp3',
        artist: 'Miyagi_&_Эндшпиль',
        duration: '3:49',
        time: "7 дней назад",
        img: './imgs/Без названия (18).jfif'
    },
    {
        id: 7,
        name: 'KADI',
        url: './mp3/Miyagi_Эндшпиль_feat_KADI_In_Love.mp3',
        artist: 'Miyagi',
        duration: '4:39',
        time: "9 дней назад",
        img: 'https://i.scdn.co/image/ab67616d0000b273b3d102b4542087375ea0339d'
    },
    
]


let playlist = document.querySelector('.playlist')
let audio = document.querySelector('audio')
reload(arr, playlist)
function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let item_m = document.createElement('div')
        let bix = document.createElement('div')
        let imd = document.createElement('img')
        let p = document.createElement('p')
        let img = document.createElement('img')
        let box = document.createElement('div')
        let a1 = document.createElement('a')
        let span = document.createElement('span')
        let bax = document.createElement('div')
        let a2 = document.createElement('a')
        let a3 = document.createElement('a')
        let a4 = document.createElement('a')
        let a5 = document.createElement('a')
        let a6 = document.createElement('a')

        imd.classList.add('imd')
        item_m.classList.add('item')
        bix.classList.add('bix')
        box.classList.add('box')
        bax.classList.add('bax')
        imd.src='./imgs/984752_movie_play_start_turn up_player_icon.png'
        p.innerHTML = arr.indexOf(item) + 1
        item_m.setAttribute('data-index', arr.indexOf(item))
        img.src = item.img
        a1.innerHTML = item.name
        span.innerHTML = item.artist
        a2.innerHTML = 'Послушать'
        a3.innerHTML = 'music'
        a4.innerHTML = 'Время X'
        a5.innerHTML = item.time
        a6.innerHTML = item.duration
        a2.classList.add('aaa')
        a1.href = '#'
        a2.href = '#'
        a3.href = '#'
        a4.href = '#'
        a5.href = '#'
        a6.href = '#'


        item_m.append(bix, bax)
        bix.append(imd,p, img, box)
        box.append(a1, span)
        bax.append(a2, a3, a4, a5, a6)

        playlist.append(item_m)
    }
    let items = document.querySelectorAll('.aaa')
    items.forEach(item => {
        item.onclick = () => {
            let dataIndex = item.parentElement.parentElement.getAttribute('data-index')
            audio.src = arr[dataIndex].url
            audio.play()
        }
    })
}

