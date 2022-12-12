//include Filesystem
var fs = require("fs");

//get data from external textfile
var data = fs.readFileSync("input.txt").toString();
var processedData = data.split(/\r\n/g);

var result = 0;

//Split data into chunks of three
const chunkSize = 3;

//loop through processed data and form arrays of 3 with each cycle
for (let i = 0; i < processedData.length; i += chunkSize) {
  //form array dependent on chunk size
  const chunk = processedData.slice(i, i + chunkSize);
  //method to check for duplicates
  const badge = checkBadge(chunk);
  //add to the overall result
  result += badge;
}

//take the three rucksacks
function checkBadge(team) {
  //save the three single rucksacks as arrays made from their respective substrings
  let firstElf = [...team[0].substring(0)];
  let secondElf = [...team[1].substring(0)];
  let thirdElf = [...team[2].substring(0)];

  //check the first two rucksacks for double items and combine them into making a "helper" Rucksack to validate against
  const combinedRucksacks = firstElf.filter((item) => secondElf.includes(item));
  //check the third rucksack for doubled items found in combined Rucksacks
  const badge = combinedRucksacks.filter((item) => thirdElf.includes(item))[0];

  //return the badge after converting it to a priority
  return toPriority(badge);
}

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

console.log(result);
