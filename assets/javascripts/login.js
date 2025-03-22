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

let forms = document.querySelectorAll(".form_login--content") ; 
const validateEmail = (email) => {
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regEmail.test(email.value.trim());
  };

const validateName = (name) => {
    const regName = /^[A-Z][a-z]+(\s[A-Z][a-z]*)*$/ ; 
    return regName.test(name.value.trim()) ; 
}
  
  const checkValidate = (email, password, name = "none") => {
    let isValid = true;
  

    
    if (email.value.trim() === "" || password.value.trim() === "") {
        return false;
    }
    
  
    if (!validateEmail(email)) {
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }
  
    if (password.value.trim().length < 6) {
      password.classList.add("is-invalid");
      password.classList.remove("is-valid");
      isValid = false;
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }
  
    if (name != "none" && !validateName(name)) {
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
        isValid = false;
    } else if(name != "none") {
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
    }
    
  
    return isValid;
  };
  
  let cnt = 0;

  const createUserObject = (email, password, name) => {
      const user = {
          id: cnt++,
          name: name.value.trim(),
          email: email.value.trim(),
          password: password.value.trim(),
      };
  
      let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
      registeredUsers.push(user);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  
      console.log("Đã lưu thông tin đăng ký vào localStorage:", user);
  };
  
const btnSubmit = document.getElementById("btn-submit-all");

  btnSubmit.addEventListener("click", (e) => {
      e.preventDefault(); 
  
      let emailSignUp = document.querySelector("#emailSignUp");
      let passwordSignUp = document.querySelector("#passwordSignUp");
      let name = document.querySelector("#fullName");
  
      let emailLogin = document.querySelector("#email");
      let passwordLogin = document.querySelector("#passwordLogin");
  
      let forms = document.querySelectorAll(".form_login--content");
  
      forms.forEach((form) => {
          if (!form.classList.contains("hidden_form")) {
              if (form.id === "signUpForm") {
                  if (checkValidate(emailSignUp, passwordSignUp, name)) {
                      console.log("Đăng ký thành công!");
                      createUserObject(emailSignUp, passwordSignUp, name);
                  } else {
                      console.log("Đăng ký không thành công!");
                  }
              } else if (form.id === "loginFormContent") {
                  if (checkValidate(emailLogin, passwordLogin)) {
                      let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                      let userFound = registeredUsers.find(user =>
                          user.email === emailLogin.value.trim() &&
                          user.password === passwordLogin.value.trim()
                      );
  
                      if (userFound) {
                        localStorage.setItem("isLoggedIn", "true"); 
                                          
                        console.log("Đăng nhập thành công!");
                      } else {
                          console.log("Email hoặc mật khẩu không đúng!");
                      }
                  } else {
                      console.log("Đăng nhập không thành công!");
                  }
              }
          }
      });
  });

