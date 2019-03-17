
var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'https://goo.gl/images/Rwz6Po', 
        'https://goo.gl/images/AJwEwV', 
        'https://goo.gl/images/nVpjSF', 
        'https://goo.gl/images/sxELWA'];

    random_result = Math.floor(math.random() * 101 ) + 19;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i <4; i++){

        var random = Math.floor(math.random() * 11) + 1;
        
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] +"')",
                "background-size":"cover"
                
            });
        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);
}


resetAndStart();



$(document).on('click',"crystal", function () {

    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $("#previous").html("Total Score:" + previous);

    console.log(previous);

    if(previous > random_result){
        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result){
        win++;

        $("#win").html("You Win:" + win);

        previous = 0;
        
        resetAndStart();
    }
    
});
