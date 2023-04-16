const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitBtn = document.querySelector('#submit');

const secretDiv = document.querySelector('#secret-div');
const errorDiv = document.querySelector('#error');

const validUserName = 'player1';
const validpass = '1234';

submitBtn.addEventListener('click' , ()=> {
    let UserName = userNameInput.value;
    let userPassword = passwordInput.value;

    if(UserName === validUserName && userPassword === validpass) {
        secretDiv.style.display = 'block';
    }
    else{
        errorDiv.style.display='block';
    }
}); 
