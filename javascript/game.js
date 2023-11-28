//element html

let menu=document.getElementById("menu")
let zone=document.getElementById("gameZone")
let isWin=false

/*definir les fonctions*/

function menuChange() {
    /*if(menu.value=='1'){
        zone.style.backgroundColor="blue"
    }

    else if(menu.value=='2'){
        zone.style.backgroundColor="red"
    }*/

    switch(menu.value) {
        case'1': fairNumber()
        break
        case'2':ticTacToe()
        break
        default: reset()
        break
    }
}

function reset() {
    zone.innerHTML=""
    zone.classList.remove('tttZone')
}


/**
 * cette fontion déclenche le jeu du juste prix
 */
function fairNumber() {
    //initialiser la zone
    reset()
    zone.innerHTML="<h2>juste prix</h2>"
    //on intialise les variable
    let randomTarget=Math.floor(Math.random()*100+1)
    console.log(randomTarget)
    let userNumber=null
    let count= 0

    //on ajoute des élèments html
    let playerImput=document.createElement("input")
    playerImput.setAttribute('type', 'text')
    playerImput.setAttribute('id', 'playerInput')
    playerImput.setAttribute('placeholder', 'tapez votre proposition')

    let inputLabel=document.createElement("label")
    inputLabel.setAttribute('for', 'playerInput')
    inputLabel.innerHTML="devinez un nombre entre 1 et 100"

    let submitButton=document.createElement('button')
    submitButton.innerHTML="Valider"
    submitButton.addEventListener('click', compareNumber)

    zone.appendChild(inputLabel)
    zone.appendChild(playerImput)
    zone.appendChild(submitButton)

    //le fontionnement du jeu
    function compareNumber(){
        count++

        let userNumber=parseInt(playerImput.value)
        let message=`coup n°${count} - proposition : ${userNumber} `

        if(isNaN(userNumber)){message ="entrer un nombre"}
        else if(userNumber>randomTarget){message +="c'est moins"}
        else if(userNumber<randomTarget){message +="c'est plus"}
        else{message += `bravo vous avez gagné`
        isWin=true
        }

        let newMessage=document.createElement('p')
        newMessage.innerHTML=message
        zone.appendChild(newMessage)

        if(isWin){zone.removeChild(submitButton)}
        
    }
    
}

function ticTacToe(){
    reset()

    //variable

    let squares=[]
    //mise en page de la zone
    let infoPanel=document.createElement('div')
    infoPanel.classList.add('infoPanel')

    let grid=document.createElement('div')
    grid.classList.add('grid')

    zone.appendChild(infoPanel)
    zone.appendChild(grid)
    zone.classList.add('tttZone')

    //creation de la grille

    for(let i=0; i<9; i++){
        let square = document.createElement("div")
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }

    for(let i=0; i<9; i++){
        squares[i].addEventListener('click',squareClick.bind(squares[i]))
    }

    function squareClick(){
        this.style.backgroundImage='url("../assets/rouge.png")'
    }
}

//config les event

menu.addEventListener("change", menuChange)