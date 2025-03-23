
const loginBtn = document.getElementById('form_login--login');
const resBtn = document.getElementById('form_login--res');
const listLogin = document.querySelectorAll('.form_login--content');
const listLoginBtn = document.querySelectorAll('.form_login-click');

loginBtn.onclick = () => {
    listLogin.forEach(it => it.classList.remove('hidden_form'));
    listLoginBtn.forEach(it => it.classList.remove('hidden_form'));
    listLogin[0].classList.add('hidden_form');
    listLoginBtn[0].classList.add('hidden_form');
};

resBtn.onclick = () => {
    listLogin.forEach(it => it.classList.remove('hidden_form'));
    listLoginBtn.forEach(it => it.classList.remove('hidden_form'));
    listLogin[1].classList.add('hidden_form');
    listLoginBtn[1].classList.add('hidden_form');
};


const validateEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim());
const validateName = name => /^[A-Z][a-z]+(\s[A-Z][a-z]*)*$/.test(name.value.trim());
const validatePhone = phone => /^\d{10}$/.test(phone.value.trim());
const validatePassword = password => password.value.trim().length >= 6;
const validateDate = date => {
    const inputDate = new Date(date.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - inputDate.getFullYear();
    return age >= 10;
};

const checkValidate = (email, password, name = null, phone = null, date = null) => {
    let isValid = true;

    if (!validateEmail(email)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (!validatePassword(password)) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (date && !validateDate(date)) {
        date.classList.add('is-invalid');
        isValid = false;
    } else if (date) {
        date.classList.remove('is-invalid');
    }

    if (name && !validateName(name)) {
        name.classList.add('is-invalid');
        isValid = false;
    } else if (name) {
        name.classList.remove('is-invalid');
    }

    if (phone && !validatePhone(phone)) {
        phone.classList.add('is-invalid');
        isValid = false;
    } else if (phone) {
        phone.classList.remove('is-invalid');
    }

    return isValid;
};

let cnt = 0;


const createUserObject = (email, password, name, phone, date) => {
    const user = {
        id: cnt++,
        name: name.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        phone: phone.value.trim(),
        date: Date(date.value.trim()) 
    };
    console.log(user) ; 
    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    registeredUsers.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
};


const btnSubmit = document.getElementById('btn-submit-all');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let emailSignUp = document.querySelector('#emailSignUp');
    let passwordSignUp = document.querySelector('#passwordSignUp');
    let name = document.querySelector('#fullName');
    let phone = document.querySelector('#phone');
    let date = document.querySelector('#dateSignUp');

    let emailLogin = document.querySelector('#email');
    let passwordLogin = document.querySelector('#passwordLogin');

    listLogin.forEach((form) => {
        if (!form.classList.contains('hidden_form')) {
            if (form.id === 'signUpForm') {
                if (checkValidate(emailSignUp, passwordSignUp, name, phone, date)) {
                    createUserObject(emailSignUp, passwordSignUp, name, phone, date);
                    alert('Đăng ký thành công!');
                } else {
                    alert('Thông tin đăng ký không hợp lệ!');
                }
            } else if (form.id === 'loginFormContent') {
                if (checkValidate(emailLogin, passwordLogin)) {
                    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
                    let userFound = registeredUsers.find(user =>
                        user.email === emailLogin.value.trim() &&
                        user.password === passwordLogin.value.trim()
                    );

                    if (userFound) {
                        localStorage.setItem('isLoggedIn', 'true');
                        window.location.href = "./index.html"
                    } else {
                        alert('Email hoặc mật khẩu không đúng!');
                    }
                } else {
                    alert('Thông tin đăng nhập không hợp lệ!');
                }
            }
        }
    });
});
