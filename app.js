let randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 10;
let previousValues = [];

document.getElementById("subt").addEventListener("click", () => {
    let inputField = document.getElementById("guessField").value
    let regex = /^[a-zA-Z]+$/;
    if(inputField == ""){
        alert("šī vērtība ir obligāta");
    }
    if (inputField < 1 || inputField > 100){
        alert("ievadiet ciparu, kas ir lielāks par 1 un mazāks par 100");
    }
    if(regex.test(inputField)) {
        alert("var rakstīt tikai ciparus")
    }
    if (remainingGuesses == 0) {
        alert("zaudēji")
        return
    } else {
    if (randomNumber == inputField) {
        alert("uzminēji skaitli!")
    }
    else {
        remainingGuesses--;
        document.getElementsByClassName("lastResult")[0].innerText = remainingGuesses
    }
    }
    previousValues.push(inputField);
    document.getElementsByClassName("guesses")[0].innerText = previousValues.toString();
    
})