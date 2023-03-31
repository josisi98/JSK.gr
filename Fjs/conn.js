
let form = document.querySelector("form")
console.log(form)

console.log(utili)

console.log(passe)

let user_main = {
    email:"josias@98gmail.com",
    mot_de_passe:"taylerjim"
}

localStorage.setItem("Admin",JSON.stringify(user_main))

form.addEventListener("click", (e)=>{
    e.preventDefault()
    let email = document.getElementById("utili")
    let mot_de_passe  = document.getElementById("passe")
    let recup = JSON.parse(localStorage.getItem("Admin"))
    console.log(recup)
    if(email.value === recup.email && mot_de_passe.value === recup.mot_de_passe){
        window.location.href = "dash.html"
    
    };
    
})   


