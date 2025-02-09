const loginBtn = document.getElementById('form_login--login');
const listLogin = document.querySelectorAll('.form_login--content');
const listLoginBtn = document.querySelectorAll('.form_login-click');


loginBtn.onclick = () => {
    listLogin.forEach(it => it.classList.remove('hidden_form'));
    listLoginBtn.forEach(it => it.classList.remove('hidden_form'));
    listLogin[0].classList.add('hidden_form');
    listLoginBtn[0].classList.add('hidden_form');
};


const resBtn = document.getElementById('form_login--res');
resBtn.onclick = () => {
    listLogin.forEach(it => it.classList.remove('hidden_form'));
    listLoginBtn.forEach(it => it.classList.remove('hidden_form'));
    listLogin[1].classList.add('hidden_form');
    listLoginBtn[1].classList.add('hidden_form');
};


