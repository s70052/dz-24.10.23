let form = document.forms.namedItem('users')
const baseURL = "http://localhost:8080"
let pr = document.querySelector('.pr')

// form.onsubmit = (e) => {
//   e.preventDefault();


//   let email = new FormData(form).get('email')
//   let name = new FormData(form).get('name')
//   let surname = new FormData(form).get('surname')
//   let password = new FormData(form).get('password')

//   if (email.length > 0 && name.length > 0 && surname.length > 0 && password.length > 0) {
//     let user = {
//       email: email,
//       name: name,
//       surname: surname,
//       id: String(Math.random()),
//       password: password
//     };

//     const conf = {
//       method: "post",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     };

//     fetch(baseURL + "/users", conf)
//       .then(res => {
//         if (res.status === 201 || res.status === 200) {

//           pr.href = "./signin.html"
//         }
//       })
//       .catch(error => console.error('Error:', error));
//   } else {
//     console.log("Please fill in all fields.");
//   }
// }
// fetch(baseURL + "/users")
//   .then(res => res.json())
//   .then(users => {
//     
//     console.log(users);
//   })
//   .catch(error => console.error('Error:', error));

form.onsubmit = (e) => {
  e.preventDefault()

  let email = new FormData(form).get('email')
  let name = new FormData(form).get('name')
  let surname = new FormData(form).get('surname')
  let password = new FormData(form).get('password')

  if (email.length > 0 && name.length > 0 && surname.length > 0 && password.length > 0) {
    fetch(baseURL + "/users")
      .then(res => res.json())
      .then(users => {
        const em = users.find(user => user.email === email)
        if (em) {
          alert("Такой email уже существует")
        } else {
          let user = {
            email: email,
            name: name,
            surname: surname,
            id: String(Math.random()),
            password: password
          };

          const conf = {
            method: "post",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json"
            }
          };

          fetch(baseURL + "/users", conf)
            .then(res => {
              if (res.status === 201 || res.status === 200) {
                pr.href = "/pages/login/"
                console.log('sssssssssss')
              }
            })
           
        }
      })
    
  } else {
    console.log("Please fill in all fields.")
  }
}
