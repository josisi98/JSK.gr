function setSuperUser(item){
    return localStorage.setItem('superUser',JSON.stringify(item))
}

function getSuperUser(){
    return JSON.parse(localStorage.getItem('superUser'))
}

let btn = document.querySelector('#btn') ;

let superUser = {
    email: "Jeanaltesseg@gmail.com",
    mot_pass: "jalt"
}



setSuperUser(superUser)

const form = document.querySelector('form')
form.addEventListener('submit', function(alt) {
    alt.preventDefault()

    emailEnter = document.querySelector('#email').value
    pwdEnter = document.querySelector('#pwd').value

    console.log(emailEnter)
    console.log(pwdEnter)
    US = getSuperUser()
    console.log(US)
    if( 
        (( emailEnter === US.email) && ( pwdEnter === US.mot_pass)) 
    ){
        console.log("blblblblbbb")
        window.location.href = "dashboard.html"
    } else{
        alert("pas corret")
    }
})

btn.addEventListener('submit',function (alt){
    alt.preventDefault()
})