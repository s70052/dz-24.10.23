let tb = document.querySelector('.tb')
let dialog = document.querySelector('dialog')
let tab = document.querySelector('#tab')
let btn = document.querySelector('#btn')
let bt = document.querySelector('.bt')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')

let isWhiteBoxCreated = false

btn.onclick = () => {
    dialog.showModal()
    dialog.classList.add('dial')
    dialog.classList.remove('aaa')
}

let del = document.querySelector('.del')
del.onclick = () => {
    dialog.classList.add('aaa')
    setTimeout(() => {
        dialog.close()
    }, 700)
}

bt.onclick = () => {
    let table = document.createElement('table')
    let tr = document.createElement('tr')
    let vue = document.createElement('th')
    let vue2 = document.createElement('th')
    let vue3 = document.createElement('th')
    let vue4 = document.createElement('th')
    let th = document.createElement('th')

    table.classList.add('table')
    tr.classList.add('tr')
    vue.classList.add('vue')
    vue.innerHTML = one.value
    vue2.innerHTML = two.value
    vue3.innerHTML = three.value
    vue4.innerHTML = four.value
    th.innerHTML = five.value
    vue2.classList.add('vue2')
    vue3.classList.add('vue3')
    vue4.classList.add('vue4')
    th.classList.add('th')

    tb.append(table)
    table.append(tr)
    tr.append(vue, vue2, vue3, vue4, th)
    
    isWhiteBoxCreated = true 
}

let plit = document.querySelector('#plit')

let tp = document.querySelector('.tp')
tab.onclick = () => {
    tb.style.display = 'block'
    tp.style.display = 'none'
    isWhiteBoxCreated = false 
}

plit.onclick = () => {
    if (isWhiteBoxCreated) {
        tb.style.display = 'none'
        tp.style.display = 'block'

        let white_box = document.createElement('div')
        let jjj = document.createElement('div')
        let h4 = document.createElement('h4')
        let lor = document.createElement('p')
        let h5 = document.createElement('div')
        let h55 = document.createElement('h5')
        let h555 = document.createElement('h5')
        let ppp = document.createElement('div')
        let pp = document.createElement('p')

        h4.innerHTML = one.value
        lor.innerHTML = two.value
        h55.innerHTML = three.value
        h555.innerHTML = four.value
        pp.innerHTML = five.value
        white_box.classList.add('white_box')
        jjj.classList.add('jjj')
        h4.classList.add('h4')
        h5.classList.add('h')
        h55.classList.add('h5')
        h555.classList.add('h5')
        pp.classList.add('pp')

        tp.append(white_box)
        white_box.append(jjj)
        jjj.append(h4, lor, h5, ppp)
        h5.append(h55, h555)
        ppp.append(pp)
    }
}