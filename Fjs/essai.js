var addBtn = document.querySelector("#add-bnt");
var modal = document.querySelector(".modal");
var closeBnt = document.querySelector(".close")
addBtn.onclick = function(){
    modal.classList.add("active");
}

closeBnt.addEventListener("click",()=>{
    modal.classList.remove("active");
})
var userData = [];
var idE1 = document.getElementById("id");
var nameE1 = document.querySelectorAll("#Nom");
var PrenomE1 = document.getElementById("#Prenom");
var ageE1 = document.querySelectorAll("#Age");
var emailE1 = document.querySelectorAll("#Email");
var AdresesE1 = document.querySelectorAll("#Adresse");
var tacheE1  = document.querySelectorAll("#tâche");

var enregistreBnt = document.querySelector("#enregistre-bnt");
var registerform = document.querySelector("#register-form")



enregistreBnt.onclick = function(e){
    e.preventDefaut();
    registrationdata();
    registerform.reset('');
    closeBnt.click();    
}



if(localStorage.getItem("userData") != null){
    userData = JSON.parse(localStorage.getItem("userData")); 
}

function registrationdata(){
    userData.push({
        id: idE1.value,
        Nom: nameE1.value,
        Prenom: PrenomE1.value,
        Age: ageE1.value,
        Email: emailE1.value,
        Adresse: AdresesE1.value,
        tâche: tacheE1.value, 
    });

    var userString = JSON.stringify(userData);
    localStorage.setItem("userData",userString);
}
var tableData = document.querySelector("#table-data");
const getDatafromlocal = () =>{
    tableData = "";
    userData.forEach((data,index) =>{
        tableData.innerHTML += `
        <tr index='${index}'>
            <td>${data.id}</td>
            <td>${data.Nom}</td>
            <td>${data.Prenom}</td>
            <td>${data.Age}</td>
            <td>${data.Email}</td>
            <td>${data.Adresse}</td>
            <td>${data.tache}</td>
            <td>
                <button><i class="fa-solid fa-eye"></i></button>
                <button style="background-color: #EE534f"><i class="fa-solid fa-trash"></i></button>
            </td>

        </tr> 
        
        `;

    })
}
      