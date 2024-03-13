

for (let i = 0; i < 7; i++) {

    //a

    let wrap = document.querySelector('.wrap')
    let box = document.createElement('div')
    let ml_box = document.createElement('div')
    let img = document.createElement('img')

    let black_box = document.createElement('div')
    let black_box_h1 = document.createElement('h1')
    let black_box_p = document.createElement('p')

    let flex = document.createElement('div')
    let fle_box = document.createElement('div')
    let img2 = document.createElement('img')
    let fle_box_h2 = document.createElement('h2')

    let fle_box2 = document.createElement('div')
    let img3 = document.createElement('img')
    let fle_box_h22 = document.createElement('h2')

    let fle_box3 = document.createElement('div')
    let img4 = document.createElement('img')
    let fle_box_h23 = document.createElement('h2')

    let btns = document.createElement('div')

    let btn = document.createElement('button')
    //b

    box.classList.add('box')
    ml_box.classList.add('ml_box')
    img.classList.add('img')
    black_box.classList.add('black_box')
    black_box_h1.classList.add('h1')
    black_box_p.classList.add('p')
    flex.classList.add('flex')
    fle_box.classList.add('fle_box')
    img2.classList.add('img')
    fle_box_h2.classList.add('h2')

    fle_box2.classList.add('fle_box')
    img3.classList.add('img')
    fle_box_h22.classList.add('h2')

    fle_box3.classList.add('fle_box')
    img4.classList.add('img')
    fle_box_h23.classList.add('h2')

    btns.classList.add('btns')
    btn.classList.add('btn')

    fle_box_h2.innerHTML = '109'
    fle_box_h22.innerHTML = '3,9'
    fle_box_h23.innerHTML = '120'
    black_box_h1.innerHTML = 'MEN’S CLOTHING (120)'
    black_box_p.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in  the padded sleeve your everyday'

    btn.innerHTML = 'В избранное'
    img.src = "./81fPKd-2AYL 1.png"


    img2.src = './Group 7 (2).png'
    img3.src = './Group 10.svg'
    img4.src = './Group 9.png'


    wrap.append(box)
    box.append(ml_box, black_box)
    ml_box.append(img)
    black_box.append(black_box_h1, black_box_p, flex, btns)
    flex.append(fle_box, fle_box2, fle_box3)
    fle_box.append(img2, fle_box_h2)
    fle_box2.append(img3, fle_box_h22)
    fle_box3.append(img4, fle_box_h23)
    btns.append(btn)

    
   


    let one = document.querySelector('#one')
    let h = document.querySelector('.h')
    one.onclick = () => {
        h.innerHTML='В корзине : 5 товар'
        let boxes = document.querySelectorAll('.box')
    
        boxes.forEach((box, idx) => {

            if (idx < 5) {
                box.style.transition = 'opacity 0.8s'
                box.style.opacity = 1
              

            } else {
                box.style.transition = 'opacity 0.8s'
                box.style.opacity = 0
                
            }
        })
    }
    let two = document.querySelector('#two')
    two.onclick = () => {
        h.innerHTML='В корзине : 7 товар'
        let boxes = document.querySelectorAll('.box')
        boxes.forEach(box => {
            box.style.transition = 'opacity 0.8s'
            box.style.opacity = 1
        })
    }

  
   
    

}







