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

    
Win                 6
Draw                3
Loss                0


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
  //pair[1] = player
  let pair = element.split(" ");

  //initilize currentScore
  let playerScore = 0;
  let oponentScore = 0;

  //TO-DO: Refactor!

  //switch over pairs to calculate score
  switch (pair[0]) {
    case "A":
      //determine playerScore by finding out what tool they used
      playerScore = determineTool(pair[1]);
      //save oponentScore to pitch it against the player
      oponentScore = determineTool(pair[0]);
      //compare the scores and see who won
      //if the playerScore is greater than oponent's Score, then add the playerTool plus the outcome to finalscore
      //if it's a draw add the playerScore and the draw-score
      playerScore > oponentScore
        ? (finalScore += playerScore + 6)
        : playerScore == oponentScore
        ? (finalScore += playerScore + 3)
        : finalScore;
      console.log("Player Score: ", playerScore);
      console.log("Oponent Score: ", oponentScore);
      break;

    case "B":
      playerScore = determineTool(pair[1]);
      oponentScore = determineTool(pair[0]);
      playerScore > oponentScore ? (finalScore += playerScore) : finalScore;

      break;
    case "C":
      playerScore = determineTool(pair[1]);
      oponentScore = determineTool(pair[0]);
      playerScore > oponentScore ? (finalScore += playerScore) : finalScore;

      break;

    default:
      break;
  }

  //add currentScore to final score
});

function determineTool(player) {
  switch (player) {
    //use fall-through to cover for the usual "or" statement
    case "X":
    case "A":
      return 1;

    case "Y":
    case "B":
      return 2;

    case "Z":
    case "C":
      return 3;

    default:
      break;
  }
}

console.log("Final Score: ", finalScore);
