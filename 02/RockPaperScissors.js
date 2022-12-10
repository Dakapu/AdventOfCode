/*

Strategy Guide

                    Scores

*Oponent*
    A = Rock        1
    B = Paper       2
    C = Scissors    3

*Player*
    X = Loss        0
    Y = Win         6
    Z = Draw        3

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

  //initilize Scores

  //save oponentScore to pitch it against the player
  let oponentTool = determineScore(pair[0]);

  //determine the outcome
  let outcome = determineScore(pair[1]);

  //determine playerScore by finding out what action to use
  let playerScore = determinePlayerTool(outcome, oponentTool);

  //get the strategy-guide outcome
  let currentScore = outcome + playerScore;

  console.log("____");
  console.log("The outcome SHOULD be: ", pair[1]);
  console.log("The Oponent Score is: ", oponentTool);
  console.log("The Player Score is: ", playerScore);
  console.log("The current score is: ", currentScore);

  //update the final score
  finalScore += currentScore;
});

console.log("Final Score: ", finalScore);

function determineScore(contestant) {
  switch (contestant) {
    //Rock
    case "A":
      return 1;
    //Paper
    case "B":
      return 2;
    //Scissors
    case "C":
      return 3;

    //loss
    case "X":
      return 0;
    //win
    case "Y":
      return 6;
    //draw
    case "Z":
      return 3;
    default:
      break;
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
