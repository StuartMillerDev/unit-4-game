


//GAME OBJECT
var game={
  "gameNumber":0,
  "currentNumber":0
}

//FUNCTIONS

//reset the board and generate a new number
function resetGame(){
  game["gameNumber"]=0;
  game["currentNumber"]=0;
  //generate number between 19 and 120 for the number to guess
  game["gameNumber"]=Math.floor(Math.random()*120)+19
  $("#num").text("Random Number: "+game["gameNumber"]);
  $("#num2").text("Your total number");
//reset adding values to each crystal

    //assign a number to the value attribute for each image
    document.getElementById('c1').setAttribute("value", Math.floor(Math.random()*12)+1);
    document.getElementById('c2').setAttribute("value", Math.floor(Math.random()*12)+1);
    document.getElementById('c3').setAttribute("value", Math.floor(Math.random()*12)+1);
    document.getElementById('c4').setAttribute("value", Math.floor(Math.random()*12)+1);

      // $("c1").data("value", Math.floor(Math.random()*12)+1);
      // $("c2").data("value", Math.floor(Math.random()*12)+1);
      // $("c3").data("value", Math.floor(Math.random()*12)+1);
      // $("c4").data("value", Math.floor(Math.random()*12)+1);

}

function add(clickedNumber){
  game["currentNumber"]+=parseInt(clickedNumber);
  $("#num2").text("Total Number: "+game["currentNumber"]);
  checkGame();
}
//checks for winning condition
function checkGame(){
  if(game["gameNumber"]===game["currentNumber"]){
    //win
    alert("You have won! The number was: "+game["gameNumber"])
    resetGame();
  }
  else if(game["gameNumber"]<game["currentNumber"]){
    //lose
    alert("You have lost! The number was: "+game["gameNumber"])
    resetGame();
  }
}

//GAME SETUP

$(window).ready(function(){
  resetGame();
});


//EVENTS

  $("#c1").on("click", function(){
    //adds the currently assigned value to the current count
  add($(this).attr("value"));
  console.log($(this).attr("value"))
  });

  $("#c2").on("click", function(){
      //adds the currently assigned value to the current count
  add($(this).attr("value"));
  console.log($(this).attr("value"))
  });

  $("#c3").on("click", function(){
      //adds the currently assigned value to the current count
  add($(this).attr("value"));
  console.log($(this).attr("value"))
  });

  $("#c4").on("click", function(){
      //adds the currently assigned value to the current count
  add($(this).attr("value"));
  console.log($(this).attr("value"))
  });
