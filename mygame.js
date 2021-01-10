
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var status = "not";
function nextSequence()
{
	userClickedPattern=[];
	level++;
	var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];
	
    gamePattern.push(randomChosenColour);
	
	playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
	
    
	$("h1").text("Level "+level);
}


$(".btn").click(function() {
	var userChosenColour = $(this).attr("id");
	playSound(userChosenColour);
	animatePress(userChosenColour);
	userClickedPattern.push(userChosenColour);
	checkAnswer(userClickedPattern.length-1);
});

function playSound(name) {
	var audio = new Audio("mySounds/"+name+".mp3");
	
    audio.play();
}

function animatePress(currentColour) {
	$("#"+currentColour).addClass("pressed");
	setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
var level =0;
function startGame(){
	if(status==="not")
	{
		status="on";
		level=0;
		nextSequence();
		
	}
}

$(document).keypress(startGame);
$("button").click(startGame);
function checkAnswer(currentLevel) {
	if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
	{
		if (userClickedPattern.length === gamePattern.length){
	   setTimeout(function () {
         nextSequence();
        }, 1000);
	   }
	}
	else
	{

		//$("body").addClass("game-over");
		$(".kalia").removeClass("hide");
		
		setTimeout(function () {
         //$("body").removeClass("game-over");
		 $(".kalia").addClass("hide");
        }, 600);
		$("h1").text("GAME OVER!!! Press any key to restart.");
		$("button").text("RESTART");
		status="not";
	    gamePattern = [];
        userClickedPattern = [];
		
		
	}
	
	
}


/*$("div[type='button']").click(function(e){handler(e);});
function handler(e) {
	var userChosenColour = e.target.id;
	userClickedPattern.push(userChosenColour);
}*/
/*var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("mySounds/" + name + ".mp3");
  audio.play();
}

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}*/
