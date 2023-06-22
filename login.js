



// log-in
const loginreg = document.querySelector(".login-reg");
const linklogin = document.querySelector(".link-login");
const registrar = document.querySelector(".registrar");

registrar.addEventListener("click", ()=>{
    loginreg.classList.add("active");
})

linklogin.addEventListener("click", ()=>{
    loginreg.classList.remove("active");
})

