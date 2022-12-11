/*

Strategy Guide

                    Scores

*Oponent*
    A = Rock        1
    B = Paper       2
    C = Scissors    3

*Player*
    X = Rock        1
    Y = Paper       2
    Z = Scissors    3

WIN                 6
DRAW                3
LOSS                0

*/

//include Filesystem
var fs = require("fs");

//get data from external textfile
var data = fs.readFileSync("input.txt").toString();

//process the data by splitting the textfile on empty lines and create array entries for each pair
var processedData = data.split(/\r\n/g);
//initilize final score
var finalScore = 0;

processedData.forEach((element) => {
  //split every element into an array with two items
  //pair[0] = oponent
  //pair[1] = outcome
  let pair = element.split(" ");

  let outcome = determineTool(pair[1]);
  let oponentTool = determineTool(pair[0]);

  let playerScore = determinePlayerTool(outcome, oponentTool);

  console.log("_______");
  console.log("FIGHT!");
  console.log("Desired outcome: ", outcome);
  console.log("Oponent: ", oponentTool, "Player: ", playerScore);
  console.log("Current Score: ", playerScore + outcome);

  finalScore += outcome + playerScore;
});

function determineTool(contestant) {
  switch (contestant) {
    //define tool with fallthrough cases
    //Rock
    case "A":
      return 1;

    //Paper
    case "B":
      return 2;

    //Scissors
    case "C":
      return 3;

    //LOSS
    case "X":
      return 0;

    //DRAW
    case "Y":
      return 3;

    //WIN
    case "Z":
      return 6;
  }
}

function determinePlayerTool(currentScore, oponentTool) {
  switch (currentScore) {
    //LOSS
    case 0:
      //the player needs to be one score below the oponent UNLESS the oponent plays a Rock (1) then the player needs to play Scissors (3)
      return oponentTool == 1 ? 3 : oponentTool - 1;
    //DRAW
    case 3:
      //since a draw always requires playing the SAME as the oponenet, just add its value
      return oponentTool;
    //WIN
    case 6:
      //the player needs to be one above the oponent UNLESS the oponent plays Scissors (3), then the player needs to play Rock (1)
      return oponentTool == 3 ? 1 : oponentTool + 1;
    default:
      break;
  }
}
console.log(finalScore);
