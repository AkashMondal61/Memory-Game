var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
$(document).keypress(function (event) {
    console.log(event.key);
    if (gamePattern.length === 0) {
        level=0;
        $("h1").css("fontSize","52px");
        $("h1").text("you are in level " + level);
        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        // $("#level-title").text("Level " + level);
        nextSequence();
        //started = true;
    }
});
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    level++;
    $("#level-title").text("Level " + level);
  
    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];

    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    playsound(randomChosenColour);
}
// var randomChosenColour = buttonColours( nextSequence());
// gamePattern.push(randomChosenColour);
$(".btn").click(function () {
    var userChosenColour = $(this).attr('id');;
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    newbuttontopress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);

    console.log(userClickedPattern);
});
function checkAnswer(thelastChoosenButton) {
    if (gamePattern[thelastChoosenButton] != userClickedPattern[thelastChoosenButton]) {
        //for the red color at the time of loss
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        $("h1").css("fontSize","22px");
        $("h1").text("you are lost final level " + level + " restart !!"+"please entr any key");
        gamePattern = [];
        userClickedPattern = [];
    }
   else if (gamePattern.length === userClickedPattern.length) {
        userClickedPattern = [];
        setTimeout(function () {
            nextSequence();
        }, 500);
    }

}

function playsound(event) {
    var audio = new Audio("sounds/" + event + ".mp3");
    audio.play();
}
function newbuttontopress(currentbutton) {
    $("#" + currentbutton).addClass("pressed");
    setTimeout(function () {

        $("#" + currentbutton).removeClass("pressed");
    }, 100);
}
