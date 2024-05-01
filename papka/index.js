let form = document.forms.namedItem('us')
let a = document.querySelector('.a')
const baseURL = "http://localhost:8080"
form.onsubmit = (e) => {
    e.preventDefault()
    let user = {
        email: new FormData(form).get('email'),
        id: String(Math.random()),
        password: new FormData(form).get('password')
    }

    console.log(user);


    fetch(baseURL + "/users")
        .then(res => {
            if (res.status === 201 || res.status === 200) {
                fetch(baseURL + "/users")
                    .then(res => res.json())
                    .then(users => {
                        users.forEach(userr => {
                            if (userr.email === user.email && userr.password === user.password) {
                                a.href = '/pages/regisrtation/'
                                console.log(user.password);
                            } else {
                                alert('Неправильный пароль')
                            }
                        })
                    })
            }
        })
}