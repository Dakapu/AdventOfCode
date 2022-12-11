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
  //pair[1] = player
  let pair = element.split(" ");
  let currentScore = 0;
  let oponentTool = determineTool(pair[0]);
  let playerTool = determineTool(pair[1]);

  console.log("________");
  console.log("FIGHT!");
  console.log("Player: ", playerTool, " Oponent: ", oponentTool);

  //determine the winner
  if (
    (playerTool > oponentTool || (playerTool == 1 && oponentTool == 3)) &&
    !(playerTool == 3 && oponentTool == 1)
  ) {
    //WIN
    currentScore = playerTool + 6;
    console.log("WIN! Current score: ", currentScore);
  } else if (playerTool == oponentTool) {
    //DRAW
    currentScore = playerTool + 3;
    console.log("DRAW! Current score: ", currentScore);
  } else {
    //LOSS
    currentScore += playerTool;
    console.log("LOSS! Current score: ", currentScore);
  }

  finalScore += currentScore;
});

function determineTool(contestant) {
  switch (contestant) {
    //define tool with fallthrough cases
    //Rock
    case "A":
    case "X":
      return 1;

    //Paper
    case "B":
    case "Y":
      return 2;

    //Scissors
    case "C":
    case "Z":
      return 3;
  }
}

console.log(finalScore);
