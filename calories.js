//include Filesystem
var fs = require("fs");

//get data from external textfile
var data = fs.readFileSync("calories.txt").toString();
//process the data by splitting the textfile on empty lines and trim whitespaces
var processedData = data.replace(/\r\n/g, " ").trim().split("  ");
//initilise most calories variable
var mostCal = 0;

//for each data-set in processedData get the element
//e.g. 10642 10677 10300 7374 9085 8508 7569 6214
processedData.forEach((element) => {
  //turn the string (because element is still a string in this context) into an array
  let arrayFromElement = element.split(" ");
  //initilise sum of calories for every element anew
  let sumCal = 0;

  //for each of our newly created arrays, get the current item
  arrayFromElement.forEach((item) => {
    //and parse it to an int which we can actually perform aritmetic operations with
    let intItem = parseInt(item);
    //add the item to the sum
    sumCal += intItem;
    //check if the sum of calories is higher than [currently] most calories - if so: overwrite the value
    sumCal > mostCal ? (mostCal = sumCal) : "";
  });
});

console.log(mostCal);
