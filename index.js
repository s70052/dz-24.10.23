let inp = document.querySelectorAll('.inp')
let btn = document.querySelector('button')
let p = document.querySelectorAll('.p')
let niz = document.querySelectorAll('.niz')
let svg = document.querySelectorAll('.svg')


let error = document.querySelector('.error')
let success = document.querySelector('.success')
let form = document.forms.login


let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let ten = document.querySelector('#ten')
let eleven = document.querySelector('#eleven')
let twelve = document.querySelector('#twelve')

btn.onclick = (event) => {
    event.preventDefault()
    let value = 0
    let val = 0
    inp.forEach((input, idx) => {

        if (input.value === "") {
            input.style.border = '3px solid red'
            btn.style.background = 'red'
            value++
            error.innerHTML = "Error: " + value + '/12'
        } else {
            input.style.border = '3px solid #4200FF'
            val++
            success.innerHTML = 'Success:' + val + '/12'
        }
        if (inp[idx].value === "") {
            p[idx].style.color = 'red'
            niz[idx].innerHTML = 'Please enter your email adress'
            niz[idx].style.color = 'red'
            svg[idx].style.display = 'block'

        } else {
            p[idx].style.color = '#4200FF'
            niz[idx].innerHTML = 'Need to fill'
            niz[idx].style.color = 'gray'
            svg[idx].style.display = 'none'

        }

    }
    )
    if (/^[a-z ,.'-]+$/i.test(one.value)) {
        one.style.border = '3px solid blue'
        iii.style.display = 'none'
        ppp.style.color = 'blue'
    } else {
        one.style.border = '3px solid red'
        iii.style.display = 'block'
        ppp.style.color = 'red'
    }

    if (/^[a-z ,.'-]+$/i.test(two.value)) {
        two.style.border = '3px solid blue'
        iiii.style.display = 'none'
        pppp.style.color = 'blue'
    } else {
        two.style.border = '3px solid red'
        iiii.style.display = 'block'
        pppp.style.color = 'red'
    }

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(three.value)) {
        three.style.border = '3px solid blue'
        iiiii.style.display = 'none'
        ppppp.style.color = 'blue'
    } else {
        three.style.border = '3px solid red'
        iiiii.style.display = 'block'
        ppppp.style.color = 'red'
    }

    if (/\+\((?:998\))([0-9]{2})[-]([0-9]{3})[-](\d{2})[-](\d{2})/gm.test(four.value)) {
        four.style.border = '3px solid blue'
        o.style.color = 'grey'
    } else {
        four.style.border = '3px solid red'
        o.style.color = 'red'
    }

    if (/\+\((?:998\))([0-9]{2})[-]([0-9]{3})[-](\d{2})[-](\d{2})/gm.test(five.value)) {
        five.style.border = '3px solid blue'
        oo.style.color = 'grey'
    } else {
        five.style.border = '3px solid red'
        oo.style.color = 'red'
    }

    if (/\+\((?:998\))([0-9]{2})[-]([0-9]{3})[-](\d{2})[-](\d{2})/gm.test(six.value)) {
        six.style.border = '3px solid blue'
        ooo.style.color = 'grey'
    } else {
        six.style.border = '3px solid red'
        ooo.style.color = 'red'
    }

    if (/^\S[0-9]{0,3}$/.test(seven.value)) {
        seven.style.border = '3px solid blue'
        ic.style.display = 'none'
        oooo.style.color = 'blue'
    } else {
        seven.style.border = '3px solid red'
        ic.style.display = 'block'
        oooo.style.color = 'red'
    }

    if (/^[a-z ,.'-]+$/i.test(eight.value)) {
        eight.style.border = '3px solid blue'
        ic2.style.display = 'none'
        ooooo.style.color = 'blue'
    } else {
        eight.style.border = '3px solid red'
        ic2.style.display = 'block'
        ooooo.style.color = 'red'
    }

    if (/^[a-z ,.'-]+$/i.test(nine.value)) {
        nine.style.border = '3px solid blue'
        ic3.style.display = 'none'
        oooooo.style.color = 'blue'
    } else {
        nine.style.border = '3px solid red'
        ic3.style.display = 'block'
        oooooo.style.color = 'red'
    }

    if (/^[a-z ,.'-]+$/i.test(ten.value)) {
        ten.style.border = '3px solid blue'
        ic4.style.display = 'none'
        l.style.color = 'blue'
    } else {
        ten.style.border = '3px solid red'
        ic4.style.display = 'block'
       l.style.color = 'red'
    }

    if (/^[a-z ,.'-]+$/i.test(eleven.value)) {
        eleven.style.border = '3px solid blue'
        ic5.style.display = 'none'
        ll.style.color = 'blue'
    } else {
        eleven.style.border = '3px solid red'
        ic5.style.display = 'block'
        ll.style.color = 'red'
    }

    if (/^[a-z ,.'-]+$/i.test(twelve.value)) {
        twelve.style.border = '3px solid blue'
        lll.style.color = 'grey'
    } else {
        twelve.style.border = '3px solid red'
        lll.style.color = 'red'
    }


    if (value === 0) {
        submit()
    } else {
        alert('error')
    }

}
let lll = document.querySelector('#lll')
let ll = document.querySelector('#ll')
let l = document.querySelector('#l')
let oooooo = document.querySelector('#oooooo')
let ooooo = document.querySelector('#ooooo')
let oooo = document.querySelector('#oooo')
let ooo = document.querySelector('#ooo')
let oo = document.querySelector('#oo')
let o = document.querySelector('#o')
let ic = document.querySelector('#ic')
let ic2 = document.querySelector('#ic2')
let ic3 = document.querySelector('#ic3')
let ic4 = document.querySelector('#ic4')
let ic5 = document.querySelector('#ic5')
let iii = document.querySelector('#iii')
let iiii = document.querySelector('#iiii')
let iiiii = document.querySelector('#iiiii')
let ppp = document.querySelector('#p')
let pppp = document.querySelector('#pp')
let ppppp = document.querySelector('#ppp')


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })


    console.log(user);
}





