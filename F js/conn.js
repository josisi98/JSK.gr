const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
let nom = document.getElementById("nom")
let email = document.getElementById("email")
let mot_de_passe  = document.getElementById("mot_de_passe")

let user_main = {
    email:"josias@98gmail.com",
    mot_de_passe:"taylerjim"
}


signUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    console.log("ghfdnv",nom.value)
console.log("ghfdnv",email.value)
console.log("ghfdnv",mot_de_passe.value)
})
signInButton.addEventListener("submit",()=>{
    container.classList.remove("right-panel-active");
    localStorage.setItem("Admin",JSON.stringify(user_main))
})

let sp_Ad = JSON.parse(localStorage.getItem("Admin"))