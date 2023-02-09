const loginBtn = document.getElementById('login-btn');
const email = document.getElementById('email');
const password = document.getElementById('pass');

loginBtn.addEventListener('click', function(){
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value == ""){
        alert('Please enter Your Email');
    }
     else if(password.value == ""){
        alert('Please enter your password');
    }else if(email.value.match(emailRegex)&& password.value=='abcdefg'){
        window.location.replace('login.html');
    }else{
        alert('Please enter valid email');
    }
});
