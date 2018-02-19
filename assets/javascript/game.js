//Random Number Generator
function generateComputerRandom() {
    var randomNumber = document.getElementById("computerNumber")
    randomNumber.innerHTML = Math.floor((Math.random() * 101) + 19);
}

    window.onload = generateComputerRandom;

$( document ).ready(funtion() {
    
    function generateComputerRandom() {
        var randomNumber = document.getElementById("computerNumber")
        randomNumber.innerHTML = Math.floor((Math.random() * 101) + 19);
    }
});