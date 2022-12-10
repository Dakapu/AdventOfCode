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

  let oponentTool = determineTool(pair[0]);
  let playerTool = determineTool(pair[1]);

  if (playerTool > oponentTool) {
    //WIN
    console.log("win");
    finalScore += playerTool + 6;
  } else if (playerTool == oponentTool) {
    //DRAW
    console.log("draw");
    finalScore += playerTool + 3;
  } else {
    //LOSS
    console.log("loss");
    finalScore += playerTool;
  }

  function determineTool(contestant) {
    switch (contestant) {
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
});

console.log(finalScore);
