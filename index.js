const ul = document.querySelector('.item');
const texts = document.querySelector('.texts')
let scro = document.querySelector('.scroll')
let post = document.querySelector('.post2')
fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((res) => reload(res.slice(0, 100)));

let dialog = document.querySelector('dialog')
let dia = document.querySelector('.dia')
let x = document.querySelector('.x')
let c = document.querySelector('.c')
let lupa = document.querySelector('.lupa')
c.onkeyup = () => {
    lupa.style.display = 'none'
}
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
        post.innerHTML += `
        <div class="glav_rod">
        <div class="ml_rod1">

            <img src="${item.url}" alt="">
            <div class="textss">
                <p>nickname</p>
                <span class='city'>City, Country</span>
            </div>

        </div>
        <div class="ml_rod2">
            <img src="./img/Icon (1).png" alt="">
        </div>
    </div>
    <div class="images">
        <img src="${item.url}" alt="">
    </div>
    <div class="icon_box">
        <div class="icon_left">
            <img id='l' class='hear' src="./img/Vector (9).png" alt="">
            <img id='ll' src="./img/Icon (2).png" alt="">
            <img id='lll' src="./img/Icon (3).png" alt="">
        </div>
        <div class="icon_rigth">
            <img id='llll' class='ins' src="./img/Vector (10).png" alt="">
        </div>
    </div>
    <div id="text-container">
        <p class='lik'>8,888 likes</p>
        <div class='likes' id="short-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere delectus ab iure? Nisi,
            ducimus. Praesentium cupiditate excepturi ullam tenetur odit vero facere, veritatis labore,
            quibusdam laboriosam quidem. Beatae, explicabo voluptatum!
            <b id="show-full-button">...more</b>
        </div>
        <div class='likes' id="full-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic autem iure quae
            deleniti nemo voluptates quam at ut molestiae debitis asperiores recusandae magnam ips
            <b id="show-short-button">...Unmore</b>
        </div>
        <span>View all 33 coments</span>
        <div class="bux">
            <div class="p">
                <p class='likes'><b>nickname</b> Lorem ipsum dolor sit amet</p>
            </div>
            <div class="heart">
                <img src="./img/Icon (4).png" alt="">
            </div>
        </div>
        <div class="bux">
            <div class="p">
                <p class='likes'><b>nickname</b> Lorem ipsum dolor sit amet</p>
            </div>
            <div class="heart">
                <img  src="./img/Icon (4).png" alt="">
            </div>
        </div>
        <h4>1 hour ago</h4>
    </div>
    <div class="comment">
        <div class="com">
            <img class="smile" src="./img/Icon (6).png" alt="">
            <input class='ind' placeholder="Add a comment..." type="text">
        </div>
        <div class="send">
            <p>Post</p>
        </div>
    </div>
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
            logo.src='./img/Logo.png'
            one.src='./img/Vector (5).png'
            two.src='./img/Vector (6).png'
            three.src='./img/Vector (7).png'
            four.src='./img/Vector (8).png'
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




let shortText = document.getElementById("short-text");
let fullText = document.getElementById("full-text");
let showFullButton = document.getElementById("show-full-button");
let showShortButton = document.getElementById("show-short-button");

showFullButton.onclick = () => {
    shortText.style.display = "none"
    fullText.style.display = "block"
    showFullButton.style.display = "none"
    showShortButton.style.display = "block"
}

showShortButton.onclick = () => {
    shortText.style.display = "block"
    fullText.style.display = "none"
    showFullButton.style.display = "block"
    showShortButton.style.display = "none"
}


