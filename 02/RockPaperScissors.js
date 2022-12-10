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
var result = 0;

processedData.forEach((element) => {
  let pair = element.split(" ");
  //initilize current score

  //switch over pairs to calculate score

  //add currentscore to final score
});
