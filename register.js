
const form = document.querySelector('form')
const userName = document.querySelector('#register-user')
const email = document.querySelector('#register-email')
const password = document.querySelector('#register-password')
const againPassword = document.querySelector('#register-again-password')


function addData(){
      localStorage.setItem('arr',JSON.stringify(arr)); // Convert the array to a JSON string and store it in localStorage
      localStorage.setItem('name',userName.value);
      localStorage.setItem('email',email.value);
      localStorage.setItem('password',password.value);
      localStorage.setItem('againPassword',againPassword.value);
}
const arr = []
form.addEventListener('submit', function(event){
    event.preventDefault();
    arr.push({
        userName: userName.value,
        email: email.value,
        password:  password.value,
        againPassword:  againPassword.value
    })
    addData();
})


