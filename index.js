let submit = document.querySelector('.submit')
let big = document.querySelector('.big')

submit.onclick = () => {
    let text = document.querySelector('.text')
    let value = text.value

    if (value !== "") {
        //a
        let mini_box = document.createElement('div')
        let pokup = document.createElement('div')
        let p = document.createElement('p')
        let img = document.createElement('img')
        let span = document.createElement('span')
        //b

        text.value = ""
        span.innerHTML = '18:44'
    
        mini_box.classList.add('mini_box')
        span.classList.add('minutes')
        pokup.classList.add('pokup')
        img.src = './xbutton_87873.png'
        img.classList.add('del')
        p.innerHTML = value + ':)'
        p.style.fontFamily = 'Italiannо'
        //c
        big.append(mini_box)
        mini_box.append(pokup,span)
        pokup.append(p, img)
        img.onclick = () => {
            mini_box.remove()
        }
      
    }
 
}

let del = document.querySelector('.del')
let mini_box = document.querySelector('.mini_box')
del.onclick = () => {
    mini_box.remove()
}






