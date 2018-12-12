var c1=$("#c1").val();
var c2=$("#c2").val();
var c3=$("#c3").val();
var c4=$("#c4").val();
var c5=$("#c5").val();

console.log(c3);
console.log(c5);
//GAME OBJECT
var game={
  "gameNumber":0,
  "currentNumber":0,
  "clicky":[c1,c2,c3,c4]
}

//add data attr or put in divs for each image. 

//FUNCTIONS

//reset the board and generate a new number
function resetGame(){
  //generate number between 19 and 120 for the number to guess
  game["gameNumber"]=Math.floor(Math.random()*120)+19
  console.log("Game Number reset: ", game["gameNumber"]);
//reset adding values to each crystal
  game["clicky"].forEach(function(index){
    //assign a number to the value attribute for each image
     index=Math.floor(Math.random*12)+1;
     console.log(index);
    //NOT CURRENTLY WORKING, DOES NOT ASSIGN
  });
}

function add(clickedNumber){
  game["currentNumber"]+=clickedNumber;
  checkGame();
  console.log(clickedNumber);
}
//checks for winning condition
function checkGame(){
  if(game["gameNumber"]==game["currentNumber"]){
    //win
    alert("You have won! The number was: "+game["gameNumber"])
    resetGame();
  }
  else if(game["gameNumber"]<game["currentNumber"]){
    //lose
    alert("You have lost! The number was: "+game["gameNumber"])
    resetGame();
  }
  console.log("Check Game");
}

//GAME SETUP

$(window).ready(function(){
  resetGame();
});


//EVENTS

  $("#c1").on("click", function(){
    //adds the currently assigned value to the current count
  add(this.value);
  });

  $("#c2").on("click", function(){
      //adds the currently assigned value to the current count
  add(this.value);
  });

  $("#c3").on("click", function(){
      //adds the currently assigned value to the current count
  add(this.value);
  });

  $("#c4").on("click", function(){
      //adds the currently assigned value to the current count
  add(this.value);
  });
