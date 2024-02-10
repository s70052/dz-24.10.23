let submit = document.querySelector('.submit')
let big = document.querySelector('.big')

submit.onclick = () => {
    let text = document.querySelector('.text')
    let value = text.value
    text.value = ""
    if (value !== "") {
        //a
        let mini_box = document.createElement('div')
        let pokup = document.createElement('div')
        let p = document.createElement('p')
        let img = document.createElement('img')
        let span = document.createElement('span')
        //b

        
      let time=new Date()
      let cur=time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()
    p.style.fontFamily='Italianno'
        mini_box.classList.add('mini_box')
        span.classList.add('minutes')
        span.classList.add('p')
        pokup.classList.add('pokup')
       span.style.color='white'
        img.src = './xbutton_87873.png'
        img.classList.add('del')
        p.innerHTML = value + ':)'
        span.innerHTML=cur
     
        //c
        big.append(mini_box)
        mini_box.append(pokup,span)
        pokup.append(p, img)

     

        img.onclick = () => {
            mini_box.remove()
        }
      
    }
 
}
let min=document.querySelector('.minutes')

let tim=new Date()
let cu=tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds()
min.innerHTML=cu
min.style.color = 'white'
let del = document.querySelector('.del')
let mini_box = document.querySelector('.mini_box')

del.onclick = () => {
    mini_box.remove()
}






