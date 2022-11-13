const prompt = require("prompt-sync")();

function numberaddt() {

    let inputNumber = prompt("Choisir votre nombre : ");
    let inputToInt = parseInt(inputNumber)

    if(isNaN(inputToInt)){
        console.log("c'est autre chose qu'un chiffre")
        numberaddt()
    }else{
        let maxNumber = inputToInt + 10
        for(let i = 0; inputToInt != maxNumber; i++){
            inputToInt++;
            console.log(inputToInt);
        }
    }
}
 
numberaddt();