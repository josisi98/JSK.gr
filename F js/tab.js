// ajouter une classe de survole
let list = document.querySelectorAll(".navigation li");

function Activelink(){ 
    list.forEach((item)=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered")
}

list.forEach(item=> item.addEventListener("mouseover",Activelink));

// menu bar

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function (){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};