var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];





$(document).keypress(function(e) {
    console.log(e.key);
  if (gamePattern.length === 0) {

    nextSequence();

  }

});



function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100) 

  playSound(randomChosenColour);

}



$(".btn").click(function(event) {

  var userChosenColour = event.target.id;

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

});



function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();

}



function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {

    $("#" + currentColour).removeClass("pressed");

  }, 100);

}