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

  //initilize Scores
  let currentScore = 0;
  //determine playerScore by finding out what tool they used
  let oponentScore = determineTool(pair[0]);
  //save oponentScore to pitch it against the player
  let playerScore = determineTool(pair[1]);

  //pitch contestants against each other and see who wins
  //player won
  if (playerScore > oponentScore) {
    currentScore = playerScore + 6;
    //its a draw
  } else if (playerScore == oponentScore) {
    currentScore = playerScore + 3;
    //player lost
  } else {
    currentScore = playerScore;
  }

  //update the final score
  finalScore += currentScore;
});

console.log("Final Score: ", finalScore);

function determineTool(contestant) {
  switch (contestant) {
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
