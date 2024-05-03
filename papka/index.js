let form = document.forms.namedItem('us');

const baseURL = "http://localhost:8080"

form.onsubmit = (e) => {
    e.preventDefault();
    let user = {
        email: new FormData(form).get('email'),
        password: new FormData(form).get('password')
    };

    fetch(baseURL + "/users")
        .then(res => res.json())
        .then(users => {
            let foundUser = users.find(userr => userr.email === user.email && userr.password === user.password)
            if (foundUser) {
                location.assign('/pages/reee/')
            } else {
                alert('Неправильный email или пароль')
            }
        })
        .catch(error => {
            console.error('Ошибка при получении данных с сервера:', error)
            alert('Произошла ошибка. Пожалуйста, повторите попытку позже.')
        })
}