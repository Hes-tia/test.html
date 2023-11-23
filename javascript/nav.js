//var
let navbutton=document.getElementById("triggerbutton")
let nav=document.getElementById("nav")
let main=document.getElementById("main")

//var utiles

let isHidden = true

//function
function show(){
    if(isHidden){
    nav.style.left="0vw" 
    main.style.left="15vw"
    isHidden = false
    }
    else{
    nav.style.left="-15vw" 
    main.style.left="7.5vw"
    isHidden = true
    }
}

//trigger
navbutton.addEventListener("click", show)
