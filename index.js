let inp = document.querySelectorAll('.inp')
let btn = document.querySelector('button')
let p = document.querySelectorAll('.p')
let niz = document.querySelectorAll('.niz')
let svg = document.querySelectorAll('.svg')


let error = document.querySelector('.error')
let success = document.querySelector('.success')
let form = document.forms.login


let one=document.querySelector('#one')
let two=document.querySelector('#two')
let three=document.querySelector('#three')
let four=document.querySelector('#four')
let five=document.querySelector('#five')
let six=document.querySelector('#six')
let seven=document.querySelector('#seven')
let eight=document.querySelector('#eight')
let nine=document.querySelector('#nine')
let eleven=document.querySelector('#eleven')
let twelve=document.querySelector('#twelve')
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
    if (!value > 0) {
        submit()
    } else{
        alert('error')
    }

}
let pp=document.querySelector('#p')
one.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(one.value)) {
        one.style.border = '3px solid blue'

    } else {
        one.style.border = '3px solid red'
        pp.style.color='1px solid red'
        inp.style.border='3px solid red'
    }
}
two.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(two.value)) {
        two.style.border = '3px solid blue'

    } else {
        two.style.border = '3px solid red'

    }
}
three.onkeyup = () => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(three.value)) {
        three.style.border = '3px solid blue'

    } else {
        three.style.border = '3px solid red'
        inp.style.border='3px solid red'
    }
}
four.onkeyup = () => {
    if (/\+\((?:998\))([0-9]{2})[-]([0-9]{3})[-](\d{2})[-](\d{2})/gm.test(four.value)) {
        four.style.border = '3px solid blue'

    } else {
        four.style.border = '3px solid red'

    }
}
five.onkeyup = () => {
    if (/\+\((?:998\))([0-9]{2})[-]([0-9]{3})[-](\d{2})[-](\d{2})/gm.test(five.value)) {
        five.style.border = '3px solid blue'

    } else {
        five.style.border = '3px solid red'

    }
}
six.onkeyup = () => {
    if (/\+\((?:998\))([0-9]{2})[-]([0-9]{3})[-](\d{2})[-](\d{2})/gm.test(six.value)) {
        six.style.border = '3px solid blue'

    } else {
        six.style.border = '3px solid red'

    }
}
seven.onkeyup = () => {
    if (/^\S[0-9]{0,3}$/.test(seven.value)) {
        seven.style.border = '3px solid blue'

    } else {
        seven.style.border = '3px solid red'

    }
}
eight.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(eight.value)) {
        eight.style.border = '3px solid blue'

    } else {
        eight.style.border = '3px solid red'
       
    }
}
nine.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(nine.value)) {
        nine.style.border = '3px solid blue'

    } else {
        nine.style.border = '3px solid red'
       
    }
}
ten.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(ten.value)) {
        ten.style.border = '3px solid blue'

    } else {
        ten.style.border = '3px solid red'
       
    }
}
eleven.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(eleven.value)) {
        eleven.style.border = '3px solid blue'

    } else {
        eleven.style.border = '3px solid red'
       
    }
}
eleven.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(eleven.value)) {
        eleven.style.border = '3px solid blue'

    } else {
        eleven.style.border = '3px solid red'
       
    }
}
twelve.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(twelve.value)) {
        twelve.style.border = '3px solid blue'

    } else {
        twelve.style.border = '3px solid red'
       
    }
}
function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })


    console.log(user);
}





