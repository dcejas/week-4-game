$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#computerNumber').text(Random);
    // Appending random number to the computerNumber id in the html doc
    //


    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Setting up random numbers for each gem
    // Random number has to be between 1 - 12
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
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