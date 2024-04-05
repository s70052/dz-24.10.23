let songs = [
    {
        id: 1,
        title: 'Godzilla',
        album: 'Eminem`s album',
        release: '4 years ago',
        url: './songs/EMINEM - Godzilla.mp3',
        image: './singers/Eminem1.jpg',
        duration: '4:26',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 2,
        title: 'Lose Yourself',
        album: 'Eminem`s album',
        release: '22 years ago',
        url: './songs/EMINEM - Lose Yourself.mp3',
        image: './singers/Eminem2.jpg',
        duration: '5:26',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 3,
        title: 'Mockingbird',
        album: 'Eminem`s album',
        release: '20 years ago',
        url: './songs/EMINEM - Mockingbird.mp3',
        image: './singers/Eminem3.jpg',
        duration: '4:11',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 4,
        title: 'Sing For The Moment',
        album: 'Eminem`s album',
        release: '22 years ago',
        url: './songs/EMINEM - Sing For The Moment.mp3',
        image: './singers/Eminem4.jpg',
        duration: '5:40',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 5,
        title: 'Smack That',
        album: 'Eminem`s album',
        release: '18 years ago',
        url: './songs/EMINEM - Smack That.mp3',
        image: './singers/Eminem5.jpg',
        duration: '3:33',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 6,
        title: 'The Real Slim Shady',
        album: 'Eminem`s album',
        release: '24 years ago',
        url: './songs/EMINEM - The Real Slim Shady.mp3',
        image: './singers/Eminem6.jpg',
        duration: '4:44',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 7,
        title: 'Venom',
        album: 'Eminem`s album',
        release: '6 years ago',
        url: './songs/EMINEM - Venom.mp3',
        image: './singers/Eminem7.jpg',
        duration: '4:29',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 8,
        title: 'When I`m Gone',
        album: 'Eminem`s album',
        release: '19 years ago',
        url: "./songs/EMINEM - When I'm Gone.mp3",
        image: './singers/Eminem8.jpg',
        duration: '4:41',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 9,
        title: 'Gnat',
        album: 'Eminem`s album',
        release: '3 years ago',
        url: './songs/EMINEM - Gnat.mp3',
        image: './singers/Eminem9.jpg',
        duration: '3:44',
        singer: {
            name: 'Eminem',
            fullname: 'Marshal Bruce Mathers III',
            birthday: '17th October 1972'
        }
    },
    {
        id: 10,
        title: 'Bad Habits',
        album: 'Ed Sheeran`s album',
        release: '3 years ago',
        url: './songs/Ed Sheeran - Bad Habits.mp3',
        image: './singers/Ed Sheeran3.jpg',
        duration: '3:51',
        singer: {
            name: 'Ed Sheeran',
            fullname: 'Edward Christopher Sheeran',
            birthday: '17th February 1991'
        }
    },
    {
        id: 11,
        title: 'Perfect',
        album: 'Ed Sheeran`s album',
        release: '7 years ago',
        url: './songs/Ed Sheeran - Perfect.mp3',
        image: './singers/Ed Sheeran2.jpeg',
        duration: '4:23',
        singer: {
            name: 'Ed Sheeran',
            fullname: 'Edward Christopher Sheeran',
            birthday: '17th February 1991'
        }
    },
    {
        id: 12,
        title: 'Shape Of You',
        album: 'Ed Sheeran`s album',
        release: '7 years ago',
        url: './songs/Ed Sheeran - Shape Of You.mp3',
        image: './singers/Ed Sheeran.jpg',
        duration: '3:46',
        singer: {
            name: 'Ed Sheeran',
            fullname: 'Edward Christopher Sheeran',
            birthday: '17th February 1991'
        }
    },
    {
        id: 13,
        title: 'The Search',
        album: 'NF`s album',
        release: '5 years ago',
        url: './songs/NF - The Search.mp3',
        image: './singers/NF.jpg',
        duration: '3:15',
        singer: {
            name: 'NF',
            fullname: 'Nathan John Feuerstein',
            birthday: '30th March 1991'
        }
    },
    {
        id: 14,
        title: 'Paralyzed',
        album: 'NF`s album',
        release: '9 years ago',
        url: './songs/NF - Paralyzed.mp3',
        image: './singers/NF2.jpg',
        duration: '4:30',
        singer: {
            name: 'NF',
            fullname: 'Nathan John Feuerstein',
            birthday: '30th March 1991'
        }
    },
    {
        id: 15,
        title: 'When I Grow Up',
        album: 'NF`s album',
        release: '5 years ago',
        url: './songs/NF - When I Grow Up.mp3',
        image: './singers/NF3.jpg',
        duration: '3:16',
        singer: {
            name: 'NF',
            fullname: 'Nathan John Feuerstein',
            birthday: '30th March 1991'
        }
    }
]

let container = document.querySelector('.table_boxx')
reload(songs, container)

let isPlaying = false
let prev = null
const audio_anim = document.querySelector('.sd')
function reload(arr, place) {
    for (let item of arr) {
        let bbz = document.createElement('div')
        let p1 = document.createElement('a')
        let img1 = document.createElement('img')
        let img=document.createElement('img')
        let img2 = document.createElement('img')
        let p2 = document.createElement('a')
        let v = document.createElement('div')
        let p4 = document.createElement('a')
        let p5 = document.createElement('a')
        let p6 = document.createElement('a')
 
        
        bbz.classList.add('bbz')
        v.classList.add('v')
        p1.textContent = songs.indexOf(item) + 1
        img1.src = './img/ab67616d0000b273b3d102b4542087375ea0339d.jfif'
        img.src='./img/9224389_play_player_music_start_multimedia_icon.png'
        p2.textContent = item.title
        p4.textContent = 'Время X'
        p5.textContent = '1 день назад'
        p6.textContent = item.duration;
img.classList.add('display')
       img2.onclick=()=>{
        console.log(item.title);
       }
        [p2, p4, p5, p6].forEach(el => el.href = '#')

        img2.classList.add('heart')
        img2.src = './img/211754_heart_icon (1).png'

        bbz.append(img,p1, img1, img2, p2, v)
        v.append(p4, p5, p6)
        place.append(bbz)

        p1.onclick = () => {
            if (isPlaying && item.id === +audio.id) {
                p1.textContent = songs.indexOf(item) + 1;
                audio.pause()
                isPlaying = false
                
            } else {
                if (prev) prev.idx.textContent = prev.num
                audio.id = item.id
                audio.src = item.url
                audio.play()
                p1.textContent = ''
              
                const animContainer = document.createElement('div') 
                animContainer.innerHTML = audio_anim
                p1.appendChild(animContainer)
                prev = { idx: p1, num: songs.indexOf(item) + 1 };
                isPlaying = true
            }
        }
       
    }
}







const audio = document.querySelector('#myAudio')
const playPauseBtn = document.querySelector('#playPause')
const playPauseBtnn = document.querySelector('#playPausee')
const volumeControl = document.querySelector('#volumeControl')
const progressBar = document.querySelector('#progressBar')

audio.onended=()=>{
    
    prev.num++
    
    
    if (prev.num < songs.length) {
        let nextSong = songs[prev.num]
        audio.id = nextSong.id
        audio.src = nextSong.url
        audio.play()

       
        if (prev.idx) prev.idx.textContent = prev.num-1;
    } else {
        playPauseBtnn.style.display = 'block';
        playPauseBtn.style.display = 'none';
        audio.pause()
        isPlaying = false
    }
}

playPauseBtn.onclick = () => {
    if (!audio.paused) {
        audio.pause();
        playPauseBtnn.style.display = 'block';
        playPauseBtn.style.display = 'none';
    } 
}

playPauseBtnn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.style.display = 'block';
        playPauseBtnn.style.display = 'none';
    } 
}

volumeControl.addEventListener('input', function () {
    audio.volume = volumeControl.value
})

progressBar.addEventListener('input', function () {
    const seekTime = audio.duration * (progressBar.value / 100)
    audio.currentTime = seekTime
})

audio.addEventListener('timeupdate', function () {
    const currentTime = audio.currentTime
    const duration = audio.duration
    const progress = (currentTime / duration) * 100
    progressBar.value = progress
})
