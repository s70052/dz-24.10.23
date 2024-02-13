
let btn = document.querySelector('.btn')
let i = 1
let dialog = document.querySelector('dialog')
btn.onclick = () => {
    let age = document.querySelector('.age')
    let ages = age.value
    let tot = (2024 - ages)
    let names = document.querySelector('.name')
    let nae = names.value

    age.value = ''
    names.value = ''
    
    let bt = document.querySelector('.btnn')
    let nam_dial = document.querySelector('.namee')
    let age_dial = document.querySelector('.agee')
   

    if (ages > 0 && nae !== "") {
        let tb = document.querySelector('.tb')
        let table = document.createElement('table')
        let tr = document.createElement('tr')
        let th = document.createElement('th')
        let th2 = document.createElement('th')
        let th3 = document.createElement('th')
        let th4 = document.createElement('th')
        let imgs = document.createElement('div')
        let change = document.createElement('img')
        let trash = document.createElement('img')

        tb.classList.add('tb')
        table.classList.add('table')
        tr.classList.add('tr')
        th.classList.add('th', 'e')
        th.innerHTML = i++
        th2.classList.add('thh')
        th2.innerHTML = nae
        th3.classList.add('thhh')
        th3.innerHTML = tot
        th4.classList.add('th')
        imgs.classList.add('imgs')
        change.classList.add('change')
        change.src = './8666681_edit_icon.svg'
        trash.src = './4781812_bin_delete_file_garbage_recycle_icon.png'
        trash.classList.add('trash')


        tb.append(table)
        table.append(tr)
        tr.append(th, th2, th3, th4)
        th4.append(imgs)
        imgs.append(change, trash)

        trash.onclick = () => {
            table.classList.add('aa')

            setTimeout(() => {
                table.remove()
                i--
            }, 500)
        }

        change.onclick = () => {
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
            let val = nam_dial.value
            let val_age = age_dial.value
            let tot_age=(2024-val_age)
            nam_dial.value=''
            age_dial.value=''
            th2.innerHTML = val
            th3.innerHTML = tot_age
        
            dialog.classList.add('aaa')
            setTimeout(() => {
                dialog.close()
            }, 700)

        }
      
    } else {
        alert('Заполни пустую графу или не пиши свой возраст с минусом')
    }


}