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
  let pair = element.replace(" ", "");

  switch (pair) {
    case "AX":
      finalScore += 4;
      break;
    case "AY":
      finalScore += 8;
      break;
    case "AZ":
      finalScore += 3;
      break;

    case "BX":
      finalScore += 1;
      break;
    case "BY":
      finalScore += 5;
      break;
    case "BZ":
      finalScore += 9;
      break;

    case "CX":
      finalScore += 7;
      break;
    case "CY":
      finalScore += 2;
      break;
    case "CZ":
      finalScore += 6;
      break;

    default:
      break;
  }
});

console.log(finalScore);
