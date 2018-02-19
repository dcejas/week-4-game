//Random Computer Generated Number
function generateComputerRandom() {
    var randomNumber = document.getElementById("computerNumber")
    randomNumber.innerHTML = Math.floor((Math.random() * 101) + 19);
}
    window.onload = generateComputerRandom;




// $( document ).ready(funtion() {

//     function generateCGemRandom() {
//         var randomGemNumber = document.getElementById("computerNumber")
//         randomGemNumber.innerHTML = Math.floor((Math.random() * 101) + 19);
//     }
// });

$(document).ready(function() {

    // When random-button is clicked...
    $(".gems").on("click", function() {

        // ... we generate a random number
        var gemRandom = Math.floor(Math.random() * 11) + 1;

        // ... and then dump the random number into our random-number div. 
        $("#crystalValue").text(gemRandom);
    });
});