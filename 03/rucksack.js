//include Filesystem
var fs = require("fs");

//get data from external textfile
var data = fs.readFileSync("input.txt").toString();
var processedData = data.split(/\r\n/g);

var result = 0;

//Data = new line => new rucksack
processedData.forEach((rucksack) => {
  //each rucksack will have two equal sized compartments => half the line
  let numberOfItems = rucksack.length;

  //save the halves
  let halfOfItems = numberOfItems / 2;
  //save the substrings as array via spread-operator
  let firstHalf = [...rucksack.substring(0, halfOfItems)];
  let secondHalf = [...rucksack.substring(halfOfItems)];

  //compare halves with each other
  //save only the first occurance of the doubled item to variable
  //otherwise the output would be ['s', 's', 's']
  //doubledItem is a string
  const doubledItem = firstHalf.filter((item) => secondHalf.includes(item))[0];

  //convert item to priority
  let itemPriority = toPriority(doubledItem);

  //add the priority to the overall result
  result += itemPriority;
});

console.log(result);

function toPriority(item) {
  //Lowercase item types a through z have priorities 1 through 26.
  //Uppercase item types A through Z have priorities 27 through 52.

  //check first if lower or uppercase
  if (item == item.toUpperCase()) {
    //lowercase letters equal a = 97 in ASCII so substract 96 (since the counter starts at 0)
    return item.charCodeAt(0) - 38;
  } else {
    //uppercaseletters start at 65, but the counter continues as 27, directly connecting from the lowercase letters
    return item.charCodeAt(0) - 96;
  }
}
