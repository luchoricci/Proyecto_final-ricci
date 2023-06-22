// intento responsive

const bar = document.getElementById("barra");
const cerrar = document.getElementById("cerrar");
const nav = document.getElementById("nav");

if (barra) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")

    })


}
if (cerrar) {
    cerrar.addEventListener("click", () => {
        nav.classList.remove("active")

    })


}



// log-in
const loginreg = document.querySelector(".login-reg");
const linklogin = document.querySelector(".link-login");
const registrar = document.querySelector(".registrar");

registrar.addEventListener("click", ()=>{
    loginreg.classList.add("active");
});

linklogin.addEventListener("click", ()=>{
    loginreg.classList.remove("active");
});

const email = document.getElementById("email");
const contraceña = document.getElementById("contraceña");

const rnombre = document.getElementById("rnombre");
const remail = document.getElementById("remail");
const rcontraceña = document.getElementById("rcontraceña");