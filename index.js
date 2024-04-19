const ul = document.querySelector('.item');
const texts = document.querySelector('.texts')
let scro = document.querySelector('.scroll')
let post = document.querySelector('.post2')
fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((res) => reload(res.slice(0, 100)));
fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((res) => rel(res.slice(0, 100)));
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => rel2(res.slice(0, 100)));
let dialog = document.querySelector('dialog')
let dia = document.querySelector('.dia')
let x = document.querySelector('.x')
let c = document.querySelector('.c')
let lupa = document.querySelector('.lupa')
c.onkeyup = () => {
    lupa.style.display = 'none'
}
let tem = document.querySelector('.tem_box');





// function reload2(arr2) {
//     for (let item of arr2) {
//         tem.innerHTML += `
//     <div class="vsf">
//         <div class="tmm">
//             <img src="./img/Avatar.png" alt="">
//             <div class="nams">
//                 <div class="navvv">
//                     <p>${item.name}</p>
//                     <span>comment</span>
//                 </div>
//                 <div class="bb">
//                     <p>51 нед</p>
//                     <p>нравится</p>
//                     <p>ответить</p>
//                 </div>
//             </div>
//         </div>
//         <div class="immms">
//             <img class="white" src="./img/285639_heart_icon (1).png" alt="">
//             <img class="red" src="./img/211673_heart_icon (1).png" alt="">
//         </div>
//     </div>
//     `;


//     }

// }
let ingage = document.querySelector('.ingage')
let modal = document.querySelector('#modal')
let closed=document.querySelector('.close')
function rel(arr) {
    for (let item of arr) {
        // post.innerHTML += `

        let glav_rod = document.createElement('div')
        let ml_rod1 = document.createElement('div')
        let img = document.createElement('img')
        let textss = document.createElement('div')
        let p = document.createElement('p')
        let city = document.createElement('span')

        let ml_rod2 = document.createElement('div')
        let img2 = document.createElement('img')
        let images = document.createElement('div')
        let img3 = document.createElement('img')
        let icon_box = document.createElement('div')
        let icon_left = document.createElement('div')
        let l = document.createElement('img')
        let ll = document.createElement('img')
        let lll = document.createElement('img')
        let icon_rigth = document.createElement('div')
        let llll = document.createElement('img')
        let text_container = document.createElement('div')
        let lik = document.createElement('p')
        let likes = document.createElement('div')
        let likes2 = document.createElement('div')
        let span = document.createElement('span')

        let bux = document.createElement('div')
        let p_div = document.createElement('div')
        let likes_p = document.createElement('p')
        let heart = document.createElement('div')
        let img_heart = document.createElement('img')

        let bux2 = document.createElement('div')
        let p_div2 = document.createElement('div')
        let likes_p2 = document.createElement('p')
        let heart2 = document.createElement('div')
        let img_heart2 = document.createElement('img')

        let h4 = document.createElement('h4')

        let comment = document.createElement('div')
        let com = document.createElement('div')
        let smile = document.createElement('img')
        let ind = document.createElement('input')

        let send = document.createElement('div')
        let pp = document.createElement('p')


        glav_rod.classList.add('glav_rod')
        ml_rod1.classList.add('ml_rod1')
        img.src = item.url
        textss.classList.add('textss')
        p.innerHTML = 'nickname'
        city.classList.add('city')
        city.innerHTML = 'City, Country'
        ml_rod2.classList.add('ml_rod2')
        img2.src = './img/Icon (1).png'
        images.classList.add('images')
        img3.classList.add('clc')
        img3.src = item.url
        icon_box.classList.add('icon_box')
        icon_left.classList.add('icon_left')
        l.classList.add('hear')
        l.src = '/img/Vector (9).png'
        ll.src = './img/Icon (2).png'
        lll.src = './img/Icon (3).png'
        icon_rigth.classList.add('icon_rigth')
        llll.classList.add('ins')
        llll.src = './img/Vector (10).png'
        text_container.classList.add('text-container')
        lik.classList.add('lik')
        lik.innerHTML = '8,888 likes'
        likes.classList.add('likes')
        likes.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere delectus ab iure? Nisi, ducimus. Praesentium cupiditate excepturi ullam tenetur odit vero facere, veritatis labore, quibusdam laboriosam quidem. Beatae, explicabo voluptatum!";
        likes2.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere delectus ab iure? Nisi, ducimus. Praesentium cupiditate excepturi ullam tenetur odit vero facere, veritatis labore, quibusdam laboriosam quidem. Beatae, explicabo voluptatum!";
        likes2.classList.add('likes2')
        span.innerHTML = 'View all 33 coments'
        bux.classList.add('bux')
        p_div.classList.add('p')
        likes_p.innerHTML = 'nickname Lorem ipsum dolor sit amet'
        heart.classList.add('heart')
        img_heart.src = './img/Icon (4).png'
        bux2.classList.add('bux')
        p_div2.classList.add('p')
        likes_p2.innerHTML = 'nickname Lorem ipsum dolor sit amet'
        heart2.classList.add('heart')
        img_heart2.src = './img/Icon (4).png'
        h4.innerHTML = '1 hour ago'
        comment.classList.add('comment')
        com.classList.add('com')
        smile.classList.add('smile')
        smile.img = './img/Icon (6).png'
        ind.classList.add('ind')
        send.classList.add('send')
        pp.innerHTML = 'Post'
        text_container.classList.add('text-container')

        post.append(glav_rod, images, icon_box, text_container, comment)
        glav_rod.append(ml_rod1, ml_rod2)
        ml_rod1.append(img, textss)
        textss.append(p, city)
        ml_rod2.append(img2)
        images.append(img3)
        icon_box.append(icon_left, icon_rigth)
        icon_left.append(l, ll, lll)
        icon_rigth.append(llll)
        text_container.append(lik, likes, likes2, span, bux, bux2, h4)
        bux.append(p_div, heart)
        p_div.append(likes_p)
        heart.append(img_heart)
        bux2.append(p_div2, heart2)
        p_div2.append(likes_p2)
        heart2.append(img_heart2)
        comment.append(com, send)
        com.append(smile, ind)
        send.append(pp)


        img3.onclick = () => {
            modal.style.display = 'flex'
            ingage.src = item.url

            Promise.all([
                fetch("https://jsonplaceholder.typicode.com/comments?postId=" + item.id).then(res => res.json()),
                fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
            ]).then(([comments, photos]) => {
                reloadComments(comments, photos.slice(0, 100));
            });
        }
        closed.onclick=()=>{
            modal.style.display = 'none'
        }
    }


    // clc.forEach(element => {
    //     console.log(element.id);
    //     element.onclick = () => {
    //         ccc.style.display = 'block'
    //         aca.src = element.src


    //     }
    // })


}
let com_com = document.querySelector('.comm')
function reloadComments(arr, photos) {
    for (let item of arr) {
        com_com.innerHTML += `
        <div class="com_ava">
        <img src="./img/Avatar.png" alt="">
        <p>Камрен</p>
    </div>
    <div class="com_box">
    <div class="com_com">
        <p>${item.body}</p>
        </div>
        <div class="icon1">
            <img class="white" src="./img/285639_heart_icon (1).png" alt="">
            <img class="red" src="./img/211673_heart_icon (1).png" alt="">
        </div>
    </div>
     `
    }
    let whites = document.querySelectorAll('.white');
    let reds = document.querySelectorAll('.red');


    whites.forEach((white, index) => {
        white.onclick = () => {
            white.style.display = 'none'
            reds[index].style.display = 'block'
        }
    })

    reds.forEach((red, index) => {
        red.onclick = () => {
            red.style.display = 'none'
            whites[index].style.display = 'block'
        }
    })

}


let brx = document.querySelector('.brxx')
function rel2(arr) {
    for (let item of arr) {

        brx.innerHTML += `

        <div class="brx">
        <div class="nnn">
        <div class="brx_ml">
            <img src="./img/Avatar.png" alt="">
        </div>
        <div class="brx_gl">
            <div class="brr">
                <p>${item.name}</p>
                <p>🥰🥰</p>
            </div>
            <div class="bvv">
                <p>51 нед,</p>
                <p>нравится:1</p>
                <p>ответить</p>
            </div>
        </div>
    </div>
        <div class="immms">
            <img class="white" src="./img/285639_heart_icon (1).png" alt="">
            <img class="red" src="./img/211673_heart_icon (1).png" alt="">
        </div>
    </div>
`
        let sssx = document.querySelector('.sssx')
        let inp = document.querySelector('.indd')
        sssx.onclick = () => {
            brx.innerHTML += `

            <div class="brx">
            <div class="nnn">
            <div class="brx_ml">
                <img src="./img/Avatar.png" alt="">
            </div>
            <div class="brx_gl">
                <div class="brr">
                    <p>${item.name}</p>
                    <p class='cccom'>${inp.value}</p>
                </div>
                <div class="bvv">
                    <p>51 нед,</p>
                    <p>нравится:1</p>
                    <p>ответить</p>
                </div>
            </div>
        </div>
            <div class="immms">
                <img class="white" src="./img/285639_heart_icon (1).png" alt="">
                <img class="red" src="./img/211673_heart_icon (1).png" alt="">
            </div>
        </div>
    `


        }
 
    }

}

let img = document.querySelector('.img')
function reload(arr) {

    for (let item of arr) {
        let ml_border = document.createElement('div')
        let st_border = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'nickname'
        p.classList.add('p')
        ml_border.classList.add('ml_border')
        st_border.classList.add('st_border')
        st_border.style.backgroundImage = `url('${item.url}')`
        ul.append(ml_border)
        ml_border.append(st_border)
        st_border.append(p)

        st_border.onclick = () => {
            dialog.showModal()
            dia.src = item.url
        }
        x.onclick = () => {
            dialog.close()
        }
        scro.innerHTML += `
        <div class="scroll_box">
        <div class="minii">
            <img src="${item.url}" alt="">
            <div class="mii">
                <p class='nick'>nickname</p>
                <span>Suggestions For You</span>
            </div>
        </div>
        <div class="switchh"><p>Follow</p></div>
        `




        let mo = document.querySelector('.moon');
        let moon = document.querySelector('.moonn');
        let header = document.querySelector('header');
        let body = document.body;
        let innp = document.querySelector('.c');
        let box = document.querySelector('.box');
        let nick = document.querySelector('.nick');
        let postt = document.querySelector('.post');
        let pp = document.querySelectorAll('p');
        let side_bar = document.querySelector('.side_bar')
        let ind = document.querySelector('.ind')
        let a = document.querySelectorAll('p')
        let city = document.querySelector('.city')
        let likes = document.querySelectorAll('.likes')
        let lik = document.querySelectorAll('.lik')
        let logo = document.querySelector('.logo')
        let one = document.querySelector('.one')
        let two = document.querySelector('.two')
        let three = document.querySelector('.three')
        let four = document.querySelector('.four')
        let l = document.querySelector('#l')
        let ll = document.querySelector('#ll')
        let lll = document.querySelector('#lll')
        let llll = document.querySelector('#llll')
        mo.onclick = () => {
            header.classList.add('a');
            body.classList.add('aa');
            box.classList.add('a');
            innp.classList.add('a');
            mo.style.display = 'none';
            moon.style.display = 'block';
            nick.classList.add('nick');
            postt.classList.add('a');
            side_bar.classList.add('a')
            ind.classList.add('a')
            logo.src = './img/Logo (1).png'
            ind.classList.add('a')
            one.src = './img/Icon (8).png'
            two.src = './img/Icon (9).png'
            three.src = './img/Icon (10).png'
            four.src = './img/Vector (11).png'

            pp.forEach(i => {
                i.classList.add('nick')
            })
            a.forEach(u => {
                u.classList.add('nick')
            })
            likes.forEach(uu => {
                uu.classList.add('nick')
            })
            city.classList.add('nick')
            lik.classList.add('nick')
            l.src = './img/1 (3).png'
            ll.src = './img/2 (4).png'
            lll.src = './img/3 (3).png'
            llll.src = './img/4 (3).png'
        }
        moon.onclick = () => {
            header.classList.remove('a');
            body.classList.remove('aa');
            box.classList.remove('a');
            innp.classList.remove('a');
            moon.style.display = 'none';
            mo.style.display = 'block';
            nick.classList.remove('nick');
            postt.classList.remove('a');
            side_bar.classList.remove('a')
            ind.classList.remove('a')

            ind.classList.remove('a')
            logo.src = './img/Logo.png'
            one.src = './img/Vector (5).png'
            two.src = './img/Vector (6).png'
            three.src = './img/Vector (7).png'
            four.src = './img/Vector (8).png'
            pp.forEach(i => {
                i.classList.remove('nick')
            })
            a.forEach(u => {
                u.classList.remove('nick')
            })
            likes.forEach(uu => {
                uu.classList.remove('nick')
            })
            city.classList.remove('nick')
            lik.classList.remove('nick')
        }
        let bt = document.querySelector('.bt')
        let btt = document.querySelector('.btt')
        bt.onclick = () => {
            box.scrollLeft += 200
        }
        btt.onclick = () => {
            box.scrollLeft -= 200
        }

    }



    let hearts = document.querySelectorAll('.hear')

    hearts.forEach(heart => {
        heart.onclick = () => {
            if (heart.classList.contains('hea')) {
                heart.src = './img/Vector (9).png'
                heart.classList.remove('hea')
            } else {
                heart.src = './img/211673_heart_icon (1).png'
                heart.classList.add('hea')
            }
        }
    })
    let ins = document.querySelectorAll('.ins')

    ins.forEach(iin => {
        iin.onclick = () => {
            if (iin.classList.contains('he')) {

                iin.src = './img/Vector (10).png'
                iin.classList.remove('he')
            } else {
                iin.src = './img/9224359_bookmark_add_plus_favorite_like_icon.png'
                iin.classList.add('he')
            }
        }
    })


}










