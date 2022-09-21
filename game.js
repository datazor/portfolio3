var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var userClickedPattern = [];
var level = 0;


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);


  checkAnswer(userClickedPattern.length - 1);


});


function nextSequence() {

  userClickedPattern = []

  randomNumber = Math.floor(Math.random() * 3);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


  playSound(randomChosenColour);

  $('h1').text("level " + level)
  level++;
  started = true;
}


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


var started = false;
$(document).keypress(function(event) {
  if (started == false) {
    level = 0;
    nextSequence();
  }




})



function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");


    if (userClickedPattern.length === gamePattern.length) {


      setTimeout(function() {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    $('body').addClass('game-over');
    $('#level-title').text('Game Over, Press Any Key to Restart');
    setTimeout(function() {
      $('body').removeClass('game-over');
    }, 2000);



    startOver();



  }

}

function startOver() {


  level = 0;

  gamePattern = [];

  started = false;






}
