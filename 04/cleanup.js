//include Filesystem
var fs = require("fs");

//get data from external textfile
var data = fs.readFileSync("input.txt").toString();
var processedData = data.split(/\r\n/g);

var doubles = 0;

processedData.forEach((cleaningPair) => {
  //remove dash and split the pair in two parts
  //careful: Pair contains TWO STRINGS not NUMBERS
  let pair = cleaningPair.split(",");

  //function to retreive the whole set of numbers from the one number given
  let firstElf = pair[0].split("-");
  //save the starting and end points of the workload of each elf
  let firstElfStart = Number(firstElf[0]);
  let firstElfFinish = Number(firstElf[1]);

  let secondElf = pair[1].split("-");
  let secondElfStart = Number(secondElf[0]);
  let secondElfFinish = Number(secondElf[1]);

  //compare the two workloads if either is contained in the other and if so increase doubles
  if (
    (firstElfStart <= secondElfStart && firstElfFinish >= secondElfFinish) ||
    (firstElfStart >= secondElfStart && firstElfFinish <= secondElfFinish)
  ) {
    doubles++;
  }
});

console.log(doubles);
