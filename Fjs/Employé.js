// let data = [
//     {id:1, nom : "josia", age :"22", adresse : "abidjan,abobo", email : "josia@gmail.com", contact : "0709784438"},
//     {id:2, nom : "tayler", age :"29", adresse : "abidjan,koumassi", email : "tayler@gmail.com", contact : "0709784338"}
    
// ]

let recuMod = JSON.parse(localStorage.getItem('object'))

function readAll(){
    let recup = JSON.parse(localStorage.getItem('object'))
    const tabledata = document.querySelector(".data_table");
    tabledata.innerHTML=''
    
    recup.forEach(record => {
        row = `<tr id="${record.id}">
        <td>${record.nom}</td>
        <td>${record.age}</td>
        <td>${record.adresse}</td>
        <td>${record.email}</td>
        <td>${record.contact}</td> 

        <td>
        <button class="modifier" onclick{modifier(${record.id})}>Modifier</button>
        <button class ="supprimer" onclick{supprimer(${record.id})}>supprimer</button>
        </td>
        
  </tr>`
  tabledata.innerHTML += row;

    })

}

function supprimer(id){
    recuMod = recuMod.filter(rec => rec.id !== id);
    localStorage.setItem('object', JSON.stringify(recuMod))
    readAll();
    addEvent()
}

function creer(){
    
    document.querySelector(".creat_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

function ajouter(){
    var nom = document.querySelector(".nom").value;
    var age = document.querySelector(".age").value;
    var adresse = document.querySelector(".adresse").value;
    var email = document.querySelector(".email").value;
    var contact = document.querySelector(".contact").value;

    var newObj = {nom, age, adresse, email, contact}
    let recoir = JSON.parse(localStorage.getItem('object'))
    recoir.push(newObj);
    localStorage.setItem('object', JSON.stringify(recoir))
    document.querySelector(".creat_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();

}

function modifier(id){
    document.querySelector(".update_from").style.display = "block";
  console.log(id,recuMod,recuMod.find(rec => rec.id === parseInt(id)))
    var obj = recuMod.find(rec => rec.id === parseInt(id));
    console.log(id, obj)
    document.querySelector(".unom").value = obj.nom;
    document.querySelector(".uage").value = obj.age;
    document.querySelector(".uadresse").value = obj.adresse;
    document.querySelector(".uemail").value = obj.email;
    document.querySelector(".ucontact").value = obj.contact;
    document.querySelector(".id").value = obj.id;
}
 
// let de=document.querySelector(".update_from") 

function mise_à_jour(){
    let rr = JSON.parse(localStorage.getItem('object'))
    var id = parseInt(document.querySelector(".id").value);
    var nom = document.querySelector(".unom").value;
    var age = document.querySelector(".uage").value;
    var adresse = document.querySelector(".uadresse").value;
    var email = document.querySelector(".uemail").value;
    var contact = document.querySelector(".ucontact").value;

    let index = rr.findIndex(rec => rec.id === id);
    console.log('index : index', index)
    rr[index] = {id, nom, age, adresse, email, contact};
    localStorage.setItem('object', JSON.stringify(rr))
    // console.log(de);
    document.querySelector(".update_from").style.display = "none"
    console.log("update_from")
    readAll()
    addEvent()
}

function addEvent() {
    let mod = document.querySelectorAll(".modifier")
    let sup = document.querySelectorAll('.supprimer')
    mod.forEach(b => {
        b.addEventListener("click", (e)=>{
            const id = e.target.closest('tr').id
            modifier(id)
        })
    })
    sup.forEach(s => {
        s.addEventListener('click', (e)=> {
            const id = e.target.closest('tr').id
            console.log('ahahaha',  id)
            supprimer(parseInt(id))
        })
    })

}

window.addEventListener("load", ()=> {
    readAll()
    addEvent()
})