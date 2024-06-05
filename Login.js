const email = localStorage.getItem('email')
const password = localStorage.getItem('password')



const formLogin = document.querySelector('form');

formLogin.addEventListener('submit', function(event){
    event.preventDefault();
    const emailLogin = document.querySelector('#login-email').value;
    const passwordLogin = document.querySelector('#login-password').value;

    if(emailLogin === email && passwordLogin === password ){
        alert('Login Successful')
    }else{
        alert('Email and Password do not match')
    }
})

// if(email && password){
//     document.querySelector('#email-login').value = email
//     document.querySelector('#password-login').value = password
// }