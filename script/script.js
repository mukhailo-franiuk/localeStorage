// regExp
let checkNames = /^[a-zA-Z0-9]{3,10}$/;
let checkEmail = /^[a-zA-Z0-9.\-]{1,}\@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
let checkPassword = /^[a-zA-Z0-9\@.,\/]{4,}$/;

let statusFirstName;
let statusSecondName;
let statusEmail;
let statusPassword;

document.getElementById('f-name').addEventListener('input', function () {
    let testFirstName = checkNames.test(document.querySelector('#f-name').value);
    if (testFirstName) {
        document.querySelector('#f-name').style.borderColor = '#008000';
        document.querySelector('#f-name').setAttribute('name','true');
        statusFirstName = true;
    }
    else {
        document.querySelector('#f-name').style.borderColor = '#ff0000';
        document.querySelector('#f-name').removeAttribute('name');
        statusFirstName = false;
    }
});
document.querySelector('#s-name').addEventListener('input', function () {
    let testSecondName = checkNames.test(document.querySelector('#s-name').value);
    if (testSecondName) {
        document.querySelector('#s-name').style.borderColor = '#008000';
        document.querySelector('#s-name').setAttribute('name','true');
        statusSecondName = true;
    }
    else {
        document.querySelector('#s-name').style.borderColor = '#ff0000';
        document.querySelector('#s-name').removeAttribute('name')
        statusSecondName = false;
    }
});
document.querySelector('#email-reg').addEventListener('input',function(){
    let testEmail = checkEmail.test(document.querySelector('#email-reg').value);
    if(testEmail){
        document.querySelector('#email-reg').style.borderColor = '#008000';
        statusEmail = true;
    }
    else{
        document.querySelector('#email-reg').style.borderColor = '#ff0000';
        statusEmail = false;
    }
});
document.querySelector('#pass-reg').addEventListener('input',() => {
    let testEmail = checkPassword.test(document.querySelector('#pass-reg').value);
    if(testEmail){
        document.querySelector('#pass-reg').style.borderColor = '#008000';
statusPassword = true;
    }
    else{
        document.querySelector('#pass-reg').style.borderColor = '#ff0000';
        statusPassword = false
    }
})


let users = [];
document.querySelector('#registr').addEventListener('click', () => {
    if (statusFirstName && statusSecondName && statusEmail && statusPassword) {
        console.log('work')
        if (localStorage.length > 0 && localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push({
            firstName: document.querySelector('#f-name').value,
            secondName: document.querySelector('#s-name').value,
            email: document.querySelector('#email-reg').value,
            password: document.querySelector('#pass-reg').value
        });
        localStorage.setItem('users', JSON.stringify(users));
            document.querySelector('#f-name').value = '';
            document.querySelector('#s-name').value = '';
            document.querySelector('#email-reg').value = '';
            document.querySelector('#pass-reg').value = '';
    }
})

