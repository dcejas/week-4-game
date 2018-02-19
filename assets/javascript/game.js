$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#computerNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //


    // When gem is clicked...
    $(".gems").on("click", function() {

        // ... the gem generates a random number from 1-12
        var gemRandom = Math.floor(Math.random() * 11) + 1;

        // ... and then dumps the random number into our crystalValue div. 
        $("#crystalValue").text(gemRandom);

        var v = $(gemRandom).val();
        var total = $('#crystalValue').val($('#crystalValue').val()+ v);
    });
});